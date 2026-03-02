"use client";

export const PortalShapes = () => {
    return (
        <svg width="0" height="0" className="absolute pointer-events-none overflow-hidden">
            <defs>
                <clipPath id="blob-shape" clipPathUnits="objectBoundingBox">
                    <path d="M0.5,0.06 C0.65,0.06,0.8,0.1,0.9,0.2 C1,0.3,1,0.45,0.94,0.6 C0.88,0.75,0.75,0.85,0.6,0.92 C0.45,0.99,0.3,1,0.18,0.92 C0.06,0.84,0,0.69,0,0.5 C0,0.31,0.08,0.16,0.22,0.1 C0.36,0.04,0.42,0.06,0.5,0.06" />
                </clipPath>
                <clipPath id="organic-rect" clipPathUnits="objectBoundingBox">
                    <path d="M0,0.1 C0,0.04,0.04,0,0.1,0 H0.9 C0.96,0,1,0.04,1,0.1 V0.9 C1,0.96,0.96,1,0.9,1 H0.1 C0.04,1,0,0.96,0,0.9 V0.5 C0,0.3,0.05,0.15,0,0.1" />
                </clipPath>
            </defs>
        </svg>
    );
};
