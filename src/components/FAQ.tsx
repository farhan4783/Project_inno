"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { faq } from "@/config/content";

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-32 md:py-48 bg-noir-light relative" ref={ref}>
      <div className="max-w-[800px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="section-label block mb-6">Knowledge</span>
          <h2>
            Good to <span className="gold-text italic">Know</span>
          </h2>
        </motion.div>

        <div className="space-y-px">
          {faq.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="bg-noir border-b border-gold/5 last:border-b-0"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between py-6 px-6 text-left group"
                data-cursor-hover
              >
                <span className="text-ivory/80 text-sm pr-8 group-hover:text-ivory transition-colors duration-500">{item.question}</span>
                <motion.div
                  animate={{ rotate: openIdx === i ? 45 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-4 h-4 shrink-0 flex items-center justify-center"
                >
                  <span className="block w-3 h-px bg-gold" />
                  <span className="block w-px h-3 bg-gold absolute" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIdx === i ? "auto" : 0,
                  opacity: openIdx === i ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-champagne/45 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
