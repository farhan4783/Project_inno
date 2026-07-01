"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const galleryItems = Array.from({ length: 16 }, (_, i) => ({
  photo: `/photos/post-${String(i + 1).padStart(2, '0')}.jpg`,
  video: `/videos/post-${String(i + 1).padStart(2, '0')}.mp4`,
  hasVideo: i < 14, // first 14 have videos
}));

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-32 md:py-48 bg-noir-light relative" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-gold/30" />
              <span className="section-label">From Our Instagram</span>
            </div>
            <h2>
              The <span className="gold-text italic">Gallery</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/anasandsonsjewellers.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury mt-8 md:mt-0 self-start md:self-auto"
            data-cursor-hover
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            Follow Us
          </a>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: Math.min(i * 0.04, 0.6) }}
              className="break-inside-avoid group relative overflow-hidden cursor-pointer"
              onClick={() => setLightbox(i)}
              data-cursor-hover
            >
              {/* Photo */}
              <img
                src={item.photo}
                alt={`Anas and Sons Jewellers ${i + 1}`}
                className="w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />

              {/* Video overlay on hover */}
              {item.hasVideo && (
                <video
                  src={item.video}
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  onMouseEnter={(e) => (e.target as HTMLVideoElement).play().catch(() => {})}
                  onMouseLeave={(e) => { const v = e.target as HTMLVideoElement; v.pause(); v.currentTime = 0; }}
                />
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/20 transition-all duration-500" />

              {/* Play indicator for videos */}
              {item.hasVideo && (
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full border border-ivory/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg className="w-2.5 h-2.5 text-ivory ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-noir/97 backdrop-blur-2xl flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-8 text-champagne/40 hover:text-ivory transition-colors text-2xl font-light" onClick={() => setLightbox(null)} aria-label="Close">&times;</button>
          <button className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-champagne/30 hover:text-gold text-3xl" onClick={(e) => { e.stopPropagation(); setLightbox(Math.max(0, lightbox - 1)); }} aria-label="Previous">&#8249;</button>

          {galleryItems[lightbox].hasVideo ? (
            <video
              src={galleryItems[lightbox].video}
              autoPlay
              muted
              loop
              playsInline
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={galleryItems[lightbox].photo}
              alt=""
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          )}

          <button className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-champagne/30 hover:text-gold text-3xl" onClick={(e) => { e.stopPropagation(); setLightbox(Math.min(galleryItems.length - 1, lightbox + 1)); }} aria-label="Next">&#8250;</button>
        </motion.div>
      )}
    </section>
  );
}
