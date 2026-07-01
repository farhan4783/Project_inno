"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { collections } from "@/config/content";
import { siteConfig } from "@/config/site";

export default function Collections() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="collections" className="py-32 md:py-48 relative" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-24 md:mb-32"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-gold/30" />
            <span className="section-label">Our Collections</span>
          </div>
          <h2 className="max-w-3xl">
            Crafted for <span className="gold-text italic">Every</span> Occasion
          </h2>
        </motion.div>

        {/* Editorial Collection Items */}
        {collections.map((col, i) => {
          const isReversed = i % 2 === 1;
          return (
            <CollectionItem key={col.id} collection={col} index={i} reversed={isReversed} />
          );
        })}
      </div>
    </section>
  );
}

function CollectionItem({ collection, index, reversed }: { collection: typeof collections[0]; index: number; reversed: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const whatsappUrl = `https://wa.me/${siteConfig.phone.replace("+", "")}?text=${encodeURIComponent(collection.enquiryMessage)}`;

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-12 gap-6 md:gap-12 mb-32 md:mb-48 items-center ${reversed ? "" : ""}`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? 60 : -60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`${reversed ? "md:col-start-7 md:col-span-6 md:order-2" : "md:col-span-6"} relative group`}
      >
        <div className="relative overflow-hidden aspect-[3/4] image-shine">
          <img
            src={collection.image}
            alt={collection.name}
            className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/40 to-transparent" />
        </div>
        {/* Floating second image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className={`absolute ${reversed ? "-left-6 md:-left-12" : "-right-6 md:-right-12"} -bottom-8 md:-bottom-16 w-2/5 aspect-square overflow-hidden border border-gold/10 shadow-2xl hidden md:block`}
        >
          <img
            src={collection.secondImage}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className={`${reversed ? "md:col-span-5 md:order-1" : "md:col-start-8 md:col-span-5"} flex flex-col justify-center`}
      >
        <span className="section-label mb-4">{collection.subtitle}</span>

        <h3 className="font-heading text-4xl md:text-5xl text-ivory font-light mb-6 tracking-wide">
          {collection.name}
        </h3>

        <div className="w-10 h-px bg-gold/30 mb-6" />

        <p className="text-champagne/60 leading-relaxed mb-6 text-sm">
          {collection.longDescription}
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {collection.features.map((f) => (
            <span key={f} className="text-[9px] tracking-[0.2em] uppercase text-gold-muted border border-gold/10 px-3 py-1.5">
              {f}
            </span>
          ))}
        </div>

        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-luxury self-start" data-cursor-hover>
          Enquire
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
      </motion.div>
    </div>
  );
}
