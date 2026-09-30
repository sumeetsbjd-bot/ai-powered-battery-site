"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { promotions } from "@/data/siteConfig";

export default function Promotions() {
  const { t } = useLanguage();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="badge-neon mb-4 inline-block">{t("🎉 Deals", "🎉 Tawaran")}</span>
          <h2 className="section-title text-white">
            {t("Hot ", "Promosi ")}<span className="glow-text">{t("Promotions", "Hebat")}</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {promotions.map((promo) => (
            <div key={promo.id} className="glass-card relative overflow-hidden group">
              {/* Promo background image */}
              <img src={`/images/promo/promo-bg${promotions.indexOf(promo) + 1}.jpg`} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.15] group-hover:opacity-[0.25] transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27]/80 to-[#0a0e27]/60" />
              <div className="relative p-6">
              {/* Decorative glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00ff88]/10 rounded-full blur-3xl group-hover:bg-[#00ff88]/20 transition-all" />

              <span className="badge-neon mb-4 inline-block">{promo.badge}</span>
              <h3 className="font-[family-name:var(--font-poppins)] font-bold text-xl text-white mb-2">
                {t(promo.title, promo.titleBM)}
              </h3>
              <p className="text-white/50 text-sm mb-5">
                {t(promo.subtitle, promo.subtitleBM)}
              </p>

              {/* Promo Code */}
              <div className="flex items-center gap-2">
                <code className="flex-1 glass-input text-center py-2 text-sm font-mono text-[#00ff88] tracking-wider">
                  {promo.code}
                </code>
                <button
                  onClick={() => copyCode(promo.code)}
                  className="btn-neon !py-2 !px-4 text-xs cursor-pointer"
                >
                  {copiedCode === promo.code ? "✓ Copied!" : "Copy"}
                </button>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
