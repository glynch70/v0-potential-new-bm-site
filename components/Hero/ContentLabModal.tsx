'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, Sparkles } from 'lucide-react';

interface ContentLabModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ViralBlueprint {
  shortForm: string;
  youtube: string;
  aesthetic: string;
}

export const ContentLabModal = ({ isOpen, onClose }: ContentLabModalProps) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [niche, setNiche] = useState('');
  const [loading, setLoading] = useState(false);
  const [blueprint, setBlueprint] = useState<ViralBlueprint | null>(null);
  const [error, setError] = useState('');

  const handleGenerateBlueprint = useCallback(async () => {
    if (!niche.trim()) {
      setError('Please enter your brand niche');
      return;
    }

    setLoading(true);
    setError('');

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
      setStep(2);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An error occurred. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  }, [niche]);

  const handleReset = () => {
    setStep(1);
    setNiche('');
    setBlueprint(null);
    setError('');
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-3xl z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
          >
            <div className="bg-black border-2 border-yellow-400 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-6 md:p-8 border-b-2 border-yellow-400">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
                  <h2 className="text-xl md:text-2xl font-black uppercase text-white">
                    Content Lab
                  </h2>
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-yellow-400/20 rounded transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {step === 1 ? (
                  // Step 1: Get Niche
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-white font-bold uppercase text-sm mb-3 tracking-wider">
                        What's your brand niche?
                      </label>
                      <input
                        type="text"
                        value={niche}
                        onChange={(e) => {
                          setNiche(e.target.value);
                          setError('');
                        }}
                        placeholder="e.g., Sustainable Fashion, Tech Startups, Fitness Coaching"
                        className="w-full px-4 py-3 bg-gray-900 text-white border-2 border-yellow-400 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400/50 placeholder-gray-500 font-mono"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            handleGenerateBlueprint();
                          }
                        }}
                      />
                    </div>

                    {error && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="p-4 bg-red-900/30 border-2 border-red-500 rounded text-red-200 text-sm font-mono"
                      >
                        {error}
                      </motion.div>
                    )}

                    <motion.button
                      onClick={handleGenerateBlueprint}
                      disabled={loading || !niche.trim()}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 md:py-4 bg-yellow-400 text-black font-black uppercase tracking-wider rounded hover:bg-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Generating Blueprint...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5" />
                          Generate Viral Blueprint
                        </>
                      )}
                    </motion.button>

                    <p className="text-gray-400 text-xs text-center font-mono">
                      Powered by Google Gemini AI
                    </p>
                  </motion.div>
                ) : (
                  // Step 2: Show Blueprint
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div className="bg-yellow-400/10 border-2 border-yellow-400 rounded-lg p-4 md:p-6">
                      <h3 className="text-white font-black uppercase text-lg mb-4">
                        Your Viral Blueprint for {niche}
                      </h3>

                      <div className="space-y-4">
                        {/* Short-form Content */}
                        <div className="border-l-4 border-yellow-400 pl-4">
                          <h4 className="text-yellow-400 font-bold uppercase text-sm mb-2">
                            Short-Form Content
                          </h4>
                          <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-wrap font-mono">
                            {blueprint?.shortForm}
                          </p>
                        </div>

                        {/* YouTube Strategy */}
                        <div className="border-l-4 border-yellow-400 pl-4">
                          <h4 className="text-yellow-400 font-bold uppercase text-sm mb-2">
                            YouTube Strategy
                          </h4>
                          <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-wrap font-mono">
                            {blueprint?.youtube}
                          </p>
                        </div>

                        {/* Brand Aesthetic */}
                        <div className="border-l-4 border-yellow-400 pl-4">
                          <h4 className="text-yellow-400 font-bold uppercase text-sm mb-2">
                            Brand Aesthetic
                          </h4>
                          <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-wrap font-mono">
                            {blueprint?.aesthetic}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <motion.button
                        onClick={handleReset}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="py-3 bg-gray-800 text-white font-black uppercase tracking-wider rounded hover:bg-gray-700 transition-colors"
                      >
                        Try Another
                      </motion.button>
                      <motion.button
                        onClick={handleClose}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="py-3 bg-yellow-400 text-black font-black uppercase tracking-wider rounded hover:bg-yellow-300 transition-colors"
                      >
                        Close
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
