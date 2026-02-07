'use client';

import { useEffect, useRef } from 'react';

interface GoldShaderBackgroundProps {
  className?: string;
}

export function Hero3DCanvas({ className = '' }: GoldShaderBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    // Set canvas size
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Vertex shader
    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment shader - GOLD ANIMATION
    const fragmentShaderSource = `
      precision mediump float;
      uniform float time;
      uniform vec2 resolution;

      // Bear Media gold color
      const vec3 goldColor = vec3(0.788, 0.635, 0.153); // #C9A227

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution;
        
        // Create flowing gradient effect
        float wave1 = sin(uv.x * 3.0 + time * 0.5) * 0.5 + 0.5;
        float wave2 = cos(uv.y * 2.0 - time * 0.3) * 0.5 + 0.5;
        float wave3 = sin((uv.x + uv.y) * 4.0 + time * 0.7) * 0.5 + 0.5;
        
        // Combine waves
        float pattern = (wave1 + wave2 + wave3) / 3.0;
        
        // Create shimmer effect
        float shimmer = sin(time * 2.0 + pattern * 10.0) * 0.1 + 0.9;
        
        // Mix with dark background
        vec3 darkColor = vec3(0.08, 0.08, 0.08);
        vec3 color = mix(darkColor, goldColor * shimmer, pattern * 0.3);
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Compile shader
    function compileShader(source: string, type: number): WebGLShader | null {
      const shader = gl.createShader(type);
      if (!shader) return null;

      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }

      return shader;
    }

    const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);

    if (!vertexShader || !fragmentShader) return;

    // Create program
    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Create buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Get uniform locations
    const timeLocation = gl.getUniformLocation(program, 'time');
    const resolutionLocation = gl.getUniformLocation(program, 'resolution');

    // Animation loop
    let startTime = Date.now();
    
    const animate = () => {
      const currentTime = (Date.now() - startTime) * 0.001; // Convert to seconds

      gl.uniform1f(timeLocation, currentTime);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);

      gl.clearColor(0.08, 0.08, 0.08, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(positionBuffer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 -z-10 ${className}`}
      style={{ display: 'block' }}
    />
  );
}
