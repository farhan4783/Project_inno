"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/config/site";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const whatsappUrl = `https://wa.me/${siteConfig.phone.replace("+", "")}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <section id="contact" className="py-32 md:py-48 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.015] rounded-full blur-[250px]" />
      </div>

      <div className="max-w-[1000px] mx-auto px-6 md:px-10 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <span className="section-label block mb-6">Get in Touch</span>
          <h2 className="mb-6">
            Begin Your <span className="gold-text italic">Journey</span>
          </h2>
          <div className="w-12 h-px bg-gold/20 mx-auto mb-8" />
          <p className="text-champagne/50 max-w-lg mx-auto text-sm leading-relaxed mb-14">
            Whether you are looking for a wedding set, a gift, or something special for yourself, 
            we are here to guide you to the perfect piece.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-gold-fill" data-cursor-hover>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp Us
          </a>
          <a href={`tel:${siteConfig.phone}`} className="btn-luxury" data-cursor-hover>
            Call {siteConfig.phoneDisplay}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
