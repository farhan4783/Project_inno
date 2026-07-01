"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loader-container"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Gold line diamond shape */}
          <motion.svg
            width="60"
            height="80"
            viewBox="0 0 60 80"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <path
              d="M30 5 L55 30 L30 75 L5 30 Z"
              stroke="url(#goldGradientLoader)"
              strokeWidth="0.8"
              fill="none"
              className="loader-logo-line"
            />
            <defs>
              <linearGradient id="goldGradientLoader" x1="0" y1="0" x2="60" y2="80">
                <stop offset="0%" stopColor="#C6A55A" />
                <stop offset="50%" stopColor="#E8D5A3" />
                <stop offset="100%" stopColor="#C6A55A" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 text-center"
          >
            <div className="font-heading text-2xl text-ivory tracking-[0.15em] font-light">
              Anas & Sons
            </div>
            <div className="text-[9px] tracking-[0.5em] text-gold-muted uppercase mt-2 font-body">
              Jewellers
            </div>
          </motion.div>

          {/* Loading bar */}
          <motion.div className="mt-10 w-32 h-px bg-charcoal overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
