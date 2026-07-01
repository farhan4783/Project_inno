"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { aiSuggestions } from "@/config/content";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-24 right-8 z-[999] w-12 h-12 rounded-full bg-noir-card border border-gold/15 flex items-center justify-center hover:border-gold/40 transition-all duration-500 group"
        aria-label="AI Jewellery Assistant"
        data-cursor-hover
      >
        <motion.svg
          animate={{ rotate: open ? 45 : 0 }}
          className="w-5 h-5 text-gold group-hover:text-ivory transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
          )}
        </motion.svg>
      </button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed bottom-40 right-8 z-[998] w-[320px] bg-noir-card border border-gold/10 shadow-2xl"
          >
            {/* Header */}
            <div className="p-5 border-b border-gold/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/></svg>
                </div>
                <div>
                  <div className="text-ivory text-sm font-medium">Jewellery Assistant</div>
                  <div className="text-champagne/30 text-[10px]">How can we help you today?</div>
                </div>
              </div>
            </div>

            {/* Suggestions */}
            <div className="p-5 space-y-2 max-h-[300px] overflow-y-auto">
              <p className="text-champagne/30 text-[10px] tracking-wider uppercase mb-3">Quick suggestions</p>
              {aiSuggestions.map((s, i) => (
                <a
                  key={i}
                  href={`https://wa.me/${siteConfig.phone.replace("+", "")}?text=${encodeURIComponent(s.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 border border-gold/5 hover:border-gold/20 hover:bg-noir-lighter transition-all duration-500 group"
                  data-cursor-hover
                >
                  <span className="text-champagne/60 text-sm group-hover:text-ivory transition-colors">{s.label}</span>
                </a>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gold/5">
              <p className="text-champagne/20 text-[9px] text-center">
                Tap any option to start a WhatsApp conversation.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
