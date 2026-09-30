"use client";
import { useLanguage } from "@/context/LanguageContext";
import { services } from "@/data/siteConfig";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="badge-neon mb-4 inline-block">{t("🛠️ Services", "🛠️ Perkhidmatan")}</span>
          <h2 className="section-title text-white">
            {t("Why Choose ", "Mengapa Pilih ")}<span className="glow-text">PowerCell</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            {t(
              "More than just batteries — we deliver convenience, speed, and peace of mind.",
              "Lebih daripada sekadar bateri — kami menyampaikan kemudahan, kelajuan, dan ketenangan fikiran."
            )}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div key={i} className="glass-card p-6 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00ff88]/10 to-[#00d4ff]/10 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-white text-lg mb-2">
                {t(service.title, service.titleBM)}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">
                {t(service.description, service.descriptionBM)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
