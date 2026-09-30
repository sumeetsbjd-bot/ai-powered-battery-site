"use client";
import { useLanguage } from "@/context/LanguageContext";
import { businessInfo } from "@/data/siteConfig";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/brand/logo.svg" alt="PowerCell" className="w-10 h-10 rounded-xl" />
              <span className="font-[family-name:var(--font-poppins)] font-bold text-lg text-white">Power<span className="glow-text">Cell</span></span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-4">{t(businessInfo.tagline, businessInfo.taglineBM)}</p>
            <div className="flex gap-3">
              {[
                { href: businessInfo.social.facebook, icon: "f", label: "Facebook" },
                { href: businessInfo.social.instagram, icon: "📸", label: "Instagram" },
                { href: businessInfo.social.tiktok, icon: "🎵", label: "TikTok" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all text-sm" aria-label={s.label}>{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-poppins)] font-semibold text-white mb-4">{t("Quick Links", "Pautan Pantas")}</h4>
            {[
              { href: "#products", en: "Products", bm: "Produk" },
              { href: "#finder", en: "Battery Finder", bm: "Pencari Bateri" },
              { href: "#services", en: "Services", bm: "Perkhidmatan" },
              { href: "#reviews", en: "Reviews", bm: "Ulasan" },
              { href: "#contact", en: "Get Quote", bm: "Sebut Harga" },
            ].map((link) => (
              <a key={link.href} href={link.href} className="block text-white/40 hover:text-[#00ff88] text-sm py-1.5 transition-colors">{t(link.en, link.bm)}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-poppins)] font-semibold text-white mb-4">{t("Contact Us", "Hubungi Kami")}</h4>
            <div className="space-y-3 text-sm text-white/40">
              <p>📍 {businessInfo.address}</p>
              <p>📱 <a href={`tel:${businessInfo.phone}`} className="hover:text-[#00ff88] transition-colors">{businessInfo.phone}</a></p>
              <p>📧 <a href={`mailto:${businessInfo.email}`} className="hover:text-[#00ff88] transition-colors">{businessInfo.email}</a></p>
              <p>🕐 {businessInfo.hours}</p>
            </div>
          </div>

          {/* Map */}
          <div>
            <h4 className="font-[family-name:var(--font-poppins)] font-semibold text-white mb-4">{t("Find Us", "Cari Kami")}</h4>
            <div className="glass rounded-xl overflow-hidden h-40">
              <div className="w-full h-full bg-white/5 flex items-center justify-center text-white/20 text-sm">
                <div className="text-center">
                  <span className="text-3xl block mb-2">📍</span>
                  {t("Google Maps", "Google Maps")}
                  <p className="text-[10px] mt-1 text-white/15">{t("Embed your map here", "Letak peta anda di sini")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© {year} {businessInfo.name}. {t("All rights reserved.", "Hak cipta terpelihara.")}</p>
          <div className="flex gap-4 text-xs text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors">{t("Privacy Policy", "Polisi Privasi")}</a>
            <a href="#" className="hover:text-white/60 transition-colors">{t("Terms of Service", "Terma Perkhidmatan")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
