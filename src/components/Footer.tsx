"use client";

import { siteConfig } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/5 pt-16 pb-10 md:pt-20 md:pb-12 bg-noir">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-4">
            <h3 className="font-heading text-2xl text-ivory tracking-[0.1em] font-light">{siteConfig.shortName}</h3>
            <p className="text-[8px] tracking-[0.5em] text-gold-muted uppercase mt-1 mb-6 font-body">Jewellers . Since {siteConfig.since}</p>
            <p className="text-champagne/30 text-sm leading-relaxed max-w-xs">
              {siteConfig.tagline}. Nearly four decades of craftsmanship, trust, and timeless beauty.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-[10px] tracking-[0.3em] text-gold-muted uppercase mb-5 font-body">Navigate</h4>
            <div className="flex flex-col gap-3">
              {["Collections", "Gallery", "Heritage", "Showroom", "Contact"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-champagne/30 text-sm hover:text-gold transition-colors duration-500" data-cursor-hover>{link}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] tracking-[0.3em] text-gold-muted uppercase mb-5 font-body">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href={`tel:${siteConfig.phone}`} className="text-champagne/30 text-sm hover:text-gold transition-colors" data-cursor-hover>{siteConfig.phoneDisplay}</a>
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="text-champagne/30 text-sm hover:text-gold transition-colors" data-cursor-hover>Instagram</a>
              <a href={siteConfig.googleMaps} target="_blank" rel="noopener noreferrer" className="text-champagne/30 text-sm hover:text-gold transition-colors" data-cursor-hover>Google Maps</a>
            </div>
          </div>

          {/* Address */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] tracking-[0.3em] text-gold-muted uppercase mb-5 font-body">Showroom</h4>
            <p className="text-champagne/30 text-sm leading-relaxed">
              {siteConfig.address}<br />
              {siteConfig.area}<br />
              {siteConfig.city} {siteConfig.pincode}
            </p>
          </div>
        </div>

        <div className="border-t border-gold/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-champagne/15 text-[10px] tracking-wider uppercase">
            &copy; {year} {siteConfig.name}
          </p>
          <p className="text-champagne/10 text-[10px] tracking-wider uppercase">
            Crafted with care
          </p>
        </div>
      </div>
    </footer>
  );
}
