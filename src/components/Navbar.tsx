"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Collections", href: "#collections" },
    { label: "Atelier", href: "#featured" },
    { label: "Heritage", href: "#heritage" },
    { label: "Gallery", href: "#gallery" },
    { label: "Showroom", href: "#showroom" },
    { label: "Contact", href: "#contact" },
  ];

  const whatsappUrl = `https://wa.me/${siteConfig.phone.replace("+", "")}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "glass py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col group" data-cursor-hover>
            <span className="font-heading text-lg md:text-xl text-ivory tracking-[0.12em] font-light transition-colors duration-300 group-hover:text-gold">
              Anas & Sons
            </span>
            <span className="text-[8px] tracking-[0.4em] text-gold-muted uppercase font-body mt-0.5">
              Jewellers . Since 1988
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor-hover
                className="relative text-champagne/50 hover:text-ivory text-[11px] tracking-[0.2em] uppercase transition-colors duration-500 font-body font-light group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="hidden md:inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-gold hover:text-ivory transition-colors duration-500 font-body"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Enquire
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
              data-cursor-hover
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-gold transition-colors"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-4 h-px bg-gold transition-colors"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-gold transition-colors"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-noir/98 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ delay: i * 0.06, duration: 0.6 }}
                  className="font-heading text-4xl text-ivory hover:text-gold transition-colors duration-300 font-light tracking-wide"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex flex-col items-center gap-4"
              >
                <div className="w-12 h-px bg-gold/20" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="btn-gold-fill text-xs"
                >
                  Enquire on WhatsApp
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
