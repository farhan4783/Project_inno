"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/config/site";

export default function Showroom() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="showroom" className="py-16 md:py-24 bg-noir-light relative overflow-hidden" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-10 md:mb-14"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-gold/30" />
            <span className="section-label">The Showroom</span>
          </div>
          <h2 className="max-w-3xl">
            Visit <span className="gold-text italic">Us</span>
          </h2>
        </motion.div>

        {/* Immersive showroom video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-video md:aspect-[21/9] overflow-hidden mb-10"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/photos/post-01.jpg"
          >
            <source src="/videos/post-03.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-noir-light via-transparent to-noir-light/30" />
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold/70 font-body">Grand Showroom</span>
            <h3 className="font-heading text-2xl md:text-4xl text-ivory font-light mt-2">Okhla&apos;s Largest</h3>
          </div>
        </motion.div>

        {/* Info grid */}
        <div className="grid md:grid-cols-3 gap-px bg-gold/5">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-noir p-8 md:p-12"
          >
            <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center mb-6">
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <h4 className="font-heading text-xl text-ivory font-light mb-4 tracking-wide">Address</h4>
            <p className="text-champagne/50 text-sm leading-relaxed mb-6">
              {siteConfig.address}<br />
              {siteConfig.area}<br />
              {siteConfig.city} {siteConfig.pincode}
            </p>
            <a href={siteConfig.googleMaps} target="_blank" rel="noopener noreferrer" className="text-gold text-[10px] tracking-[0.2em] uppercase hover:text-ivory transition-colors" data-cursor-hover>
              Get Directions &rarr;
            </a>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-noir p-8 md:p-12"
          >
            <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center mb-6">
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h4 className="font-heading text-xl text-ivory font-light mb-4 tracking-wide">Store Hours</h4>
            <div className="text-champagne/50 text-sm space-y-2">
              <div className="flex justify-between"><span>Mon to Thu</span><span className="text-ivory/70">{siteConfig.hours.weekdays}</span></div>
              <div className="flex justify-between"><span>Friday</span><span className="text-ivory/70">{siteConfig.hours.friday}</span></div>
              <div className="flex justify-between"><span>Sat & Sun</span><span className="text-ivory/70">{siteConfig.hours.sunday}</span></div>
            </div>

          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-noir p-8 md:p-12"
          >
            <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center mb-6">
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </div>
            <h4 className="font-heading text-xl text-ivory font-light mb-4 tracking-wide">Contact</h4>
            <a href={`tel:${siteConfig.phone}`} className="text-gold text-lg font-heading block mb-4 hover:text-ivory transition-colors" data-cursor-hover>
              {siteConfig.phoneDisplay}
            </a>
            <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="text-champagne/40 text-sm hover:text-gold transition-colors" data-cursor-hover>
              @anasandsonsjewellers.co
            </a>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-px aspect-[2/1] md:aspect-[3/1] overflow-hidden border border-gold/5"
        >
          <iframe
            src="https://maps.google.com/maps?q=Anas%20%26%20Sons%20Jewellers%2C%20334-G%2C%20Batla%20House%2C%20Jamia%20Nagar%2C%20Okhla%2C%20New%20Delhi%2C%20Delhi%20110025&t=&z=17&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.7) contrast(1.3)' }}
            allowFullScreen
            loading="lazy"
            title="Showroom location"
          />
        </motion.div>
      </div>
    </section>
  );
}
