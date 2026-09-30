"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { businessInfo } from "@/data/siteConfig";

const navLinks = [
  { href: "#home", en: "Home", bm: "Utama" },
  { href: "#products", en: "Products", bm: "Produk" },
  { href: "#finder", en: "Battery Finder", bm: "Pencari Bateri" },
  { href: "#services", en: "Services", bm: "Perkhidmatan" },
  { href: "#reviews", en: "Reviews", bm: "Ulasan" },
  { href: "#contact", en: "Contact", bm: "Hubungi" },
];

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <img src="/images/brand/logo.svg" alt="PowerCell" className="w-10 h-10 rounded-xl group-hover:scale-110 transition-transform" />
          <div>
            <span className="font-[family-name:var(--font-poppins)] font-bold text-lg text-white">
              Power<span className="glow-text">Cell</span>
            </span>
            <p className="text-[10px] text-white/40 -mt-1 tracking-wider uppercase">
              {t(businessInfo.tagline, businessInfo.taglineBM)}
            </p>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300"
            >
              {t(link.en, link.bm)}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="glass px-3 py-1.5 text-xs font-semibold rounded-full border border-white/10 hover:border-[#00ff88]/40 transition-all cursor-pointer"
            aria-label="Toggle language"
          >
            {lang === "en" ? "🇲🇾 BM" : "🇬🇧 EN"}
          </button>

          {/* CTA */}
          <a
            href={`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent("Hi, I need a battery!")}`}
            target="_blank"
            className="hidden sm:inline-flex btn-neon text-sm !py-2 !px-5 !rounded-full"
          >
            📱 WhatsApp
          </a>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl glass cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className={`w-5 h-0.5 bg-white/80 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-5 h-0.5 bg-white/80 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-white/80 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden glass-strong mx-4 mt-3 p-4 animate-slide-up">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all"
            >
              {t(link.en, link.bm)}
            </a>
          ))}
          <a
            href={`https://wa.me/${businessInfo.whatsapp}`}
            target="_blank"
            className="block mt-3 btn-neon text-center text-sm !rounded-xl"
          >
            📱 WhatsApp Us
          </a>
        </div>
      )}
    </nav>
  );
}
