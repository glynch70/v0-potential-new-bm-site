'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Sparkles } from 'lucide-react';

interface ViralBlueprint {
  shortForm: string;
  youtube: string;
  aesthetic: string;
}

export const ContentLabSection = () => {
  const [niche, setNiche] = useState('');
  const [loading, setLoading] = useState(false);
  const [blueprint, setBlueprint] = useState<ViralBlueprint | null>(null);
  const [error, setError] = useState('');
  const [showBlueprint, setShowBlueprint] = useState(false);

  const handleGenerateBlueprint = useCallback(async () => {
    if (!niche.trim()) {
      setError('Please enter your niche');
      return;
    }

    setLoading(true);
    setError('');
    setShowBlueprint(false);

    try {
      const response = await fetch('/api/generate-blueprint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ niche }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate blueprint');
      }

      const data = await response.json();
      setBlueprint(data.blueprint);
      setShowBlueprint(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An error occurred. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  }, [niche]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleGenerateBlueprint();
    }
  };

  return (
    <section className="w-full bg-black py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8 text-yellow-400" />
            The Content Lab
          </h2>
          <p className="text-gray-300 text-lg">
            Get your personalized viral strategy in seconds
          </p>
        </motion.div>

        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          {/* Input Container */}
          <div className="relative flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter your niche..."
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
              className="flex-1 px-6 py-4 bg-zinc-900 text-white placeholder-gray-500 rounded-full border border-zinc-700 focus:border-yellow-400 focus:outline-none transition-colors disabled:opacity-50"
            />
            <button
              onClick={handleGenerateBlueprint}
              disabled={loading}
              className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate Blueprint'
              )}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm"
            >
              {error}
            </motion.p>
          )}
        </motion.div>

        {/* Blueprint Results */}
        {showBlueprint && blueprint && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Short Form */}
            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-700">
              <h3 className="text-yellow-400 font-bold mb-3">Short-Form Strategy</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{blueprint.shortForm}</p>
            </div>

            {/* YouTube */}
            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-700">
              <h3 className="text-yellow-400 font-bold mb-3">YouTube Strategy</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{blueprint.youtube}</p>
            </div>

            {/* Brand Aesthetic */}
            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-700">
              <h3 className="text-yellow-400 font-bold mb-3">Brand Aesthetic</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{blueprint.aesthetic}</p>
            </div>
          </motion.div>
        )}

        {/* CTA Button */}
        {!showBlueprint && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-colors">
              or Book a Consultation
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
