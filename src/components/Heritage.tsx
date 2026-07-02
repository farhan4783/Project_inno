"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { timeline, highlights } from "@/config/content";
import { siteConfig } from "@/config/site";

export default function Heritage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="heritage" className="py-32 md:py-48 relative overflow-hidden" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-24 md:mb-32"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-gold/30" />
            <span className="section-label">Our Heritage</span>
          </div>
          <h2 className="max-w-3xl">
            A Legacy Built on <span className="gold-text italic">Trust</span>
          </h2>
        </motion.div>

        {/* Story block - editorial layout */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 mb-32 md:mb-48">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-5"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="/photos/post-05.jpg"
                alt="Inside Anas and Sons Jewellers"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).src = '/photos/post-02.jpg'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/50 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="md:col-span-6 md:col-start-7 flex flex-col justify-center"
          >
            <p className="text-lg md:text-xl text-champagne/70 font-light leading-[1.9] mb-8 font-heading italic">
              &ldquo;In {siteConfig.since}, we opened our doors with a simple promise: 
              honest gold, fair prices, and respect for every customer who walks in.&rdquo;
            </p>

            <div className="w-10 h-px bg-gold/20 mb-8" />

            <p className="text-champagne/55 leading-relaxed mb-6 text-sm">
              Three generations later, that promise still holds. What started as a small family shop 
              has grown into Okhla&apos;s largest jewellery showroom, trusted by thousands of families 
              for their weddings, celebrations, and everyday elegance.
            </p>
            <p className="text-champagne/55 leading-relaxed text-sm">
              Every piece in our collection, from Turkish gold designs to certified diamond sets, 
              carries the care and precision that comes from nearly 40 years of experience. 
              We do not simply sell jewellery. We help families find pieces that become part of their story.
            </p>
          </motion.div>
        </div>

        {/* Interactive Timeline */}
        <div className="mb-32 md:mb-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="section-label">The Journey</span>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent" />

            {timeline.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 * i }}
              className="bg-noir-card border border-gold/5 p-8 md:p-12 text-center group hover:bg-noir-light hover:border-gold/20 transition-all duration-700"
            >
              <div className="font-heading text-4xl md:text-5xl lg:text-6xl gold-shimmer mb-3 font-light">
                {stat.number}
              </div>
              <div className="text-ivory text-xs tracking-[0.2em] uppercase mb-1 font-body">
                {stat.label}
              </div>
              <div className="text-champagne/30 text-[11px] font-body">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className={`relative flex items-start mb-16 md:mb-24 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Dot */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-2 h-2 rounded-full bg-gold mt-2 z-10">
        <div className="absolute inset-0 rounded-full bg-gold/30 animate-ping" style={{ animationDuration: '3s' }} />
      </div>

      {/* Content */}
      <div className={`pl-12 md:pl-0 ${isLeft ? "md:w-1/2 md:pr-16 md:text-right" : "md:w-1/2 md:pl-16"}`}>
        <span className="font-heading text-3xl md:text-4xl gold-text font-light">{item.year}</span>
        <h4 className="font-heading text-xl text-ivory mt-2 mb-3 font-light tracking-wide">{item.title}</h4>
        <p className="text-champagne/50 text-sm leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}
