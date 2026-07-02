"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/config/content";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full">
        <div className="w-full h-full bg-gradient-to-l from-gold/[0.02] to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-10 md:mb-14"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-gold/30" />
            <span className="section-label">Voices of Trust</span>
          </div>
          <h2 className="max-w-2xl">
            What Our <span className="gold-text italic">Families</span> Say
          </h2>
        </motion.div>

        {/* Testimonials - Editorial Layout */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 * i }}
              className="bg-noir-card border border-gold/5 p-8 md:p-12 lg:p-16 group hover:bg-noir-light hover:border-gold/20 transition-all duration-700"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }, (_, j) => (
                  <svg key={j} className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>

              {/* Quote */}
              <p className="font-heading text-xl md:text-2xl text-ivory/80 font-light leading-relaxed mb-8 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="font-heading text-lg text-gold">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="text-ivory text-sm font-medium">{t.name}</div>
                  <div className="text-champagne/30 text-[10px] tracking-[0.2em] uppercase">{t.occasion}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real customer reviews will be added here — edit testimonials array in src/config/content.ts */}
      </div>
    </section>
  );
}
