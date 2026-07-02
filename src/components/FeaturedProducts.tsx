"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { featuredProducts } from "@/config/content";
import { siteConfig } from "@/config/site";

export default function FeaturedProducts() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="featured" className="py-16 md:py-24 bg-noir-light relative overflow-hidden" ref={ref}>
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/[0.02] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-gold/30" />
              <span className="section-label">The Atelier</span>
            </div>
            <h2 className="max-w-2xl">
              Featured <span className="gold-text italic">Pieces</span>
            </h2>
          </div>
          <a href="#collections" className="btn-luxury mt-8 md:mt-0 self-start md:self-auto" data-cursor-hover>
            View All
          </a>
        </motion.div>

        {/* Horizontal scroll carousel */}
        <div className="overflow-x-auto pb-8 -mx-6 px-6 md:-mx-10 md:px-10 scrollbar-hide">
          <div className="flex gap-6 md:gap-8" style={{ width: 'max-content' }}>
            {featuredProducts.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.15 * i }}
                className="group w-[280px] md:w-[340px] shrink-0"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden mb-5 image-shine bg-noir-card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-[1.2s] group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[8px] tracking-[0.3em] uppercase bg-noir/80 backdrop-blur-sm text-gold px-3 py-1.5 border border-gold/10">
                      {product.badge}
                    </span>
                  </div>

                  {/* Hover CTA */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
                    <a
                      href={`https://wa.me/${siteConfig.phone.replace("+", "")}?text=${encodeURIComponent(`I am interested in: ${product.name}. Can you share the price?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold-fill w-full justify-center text-[10px]"
                      data-cursor-hover
                    >
                      Enquire About This Piece
                    </a>
                  </div>
                </div>

                {/* Details */}
                <div>
                  <span className="section-label text-gold-muted">{product.category}</span>
                  <h4 className="font-heading text-xl text-ivory font-light mt-1 mb-2 tracking-wide group-hover:text-gold transition-colors duration-500">
                    {product.name}
                  </h4>
                  <div className="flex items-center gap-3 text-[10px] text-champagne/40 tracking-wider">
                    <span>{product.purity}</span>
                    <span className="w-1 h-1 rounded-full bg-gold/20" />
                    <span>{product.weight}</span>
                  </div>
                  <p className="text-gold-muted text-xs mt-2 tracking-wider">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
