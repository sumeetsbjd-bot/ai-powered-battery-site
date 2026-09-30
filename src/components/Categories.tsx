"use client";
import { useLanguage } from "@/context/LanguageContext";
import { categories } from "@/data/products";

const categoryImages: Record<string, string> = {
  car: "/images/categories/car.jpg",
  motorcycle: "/images/categories/motorcycle.jpg",
  truck: "/images/categories/truck.jpg",
  marine: "/images/categories/marine.jpg",
};

export default function Categories() {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="badge-neon mb-4 inline-block">{t("🔋 Categories", "🔋 Kategori")}</span>
          <h2 className="section-title text-white">
            {t("Browse by ", "Layari mengikut ")}<span className="glow-text">{t("Vehicle Type", "Jenis Kenderaan")}</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            {t("We carry batteries for every vehicle on Malaysian roads — from your Myvi to your fleet of trucks.", "Kami menyediakan bateri untuk setiap kenderaan di jalan Malaysia — dari Myvi hingga armada trak anda.")}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <a key={cat.id} href="#products" className="glass-card overflow-hidden text-center group cursor-pointer">
              {/* Category image */}
              <div className="relative h-36 sm:h-44 overflow-hidden">
                <img src={categoryImages[cat.id]} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27]/40 to-transparent" />
                <span className="absolute top-3 right-3 text-3xl">{cat.icon}</span>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-white text-base sm:text-lg mb-1">
                  {t(cat.name, cat.nameBM)}
                </h3>
                <p className="text-white/40 text-xs sm:text-sm">
                  {t(cat.description, cat.descriptionBM)}
                </p>
                <div className="mt-3 text-[#00ff88] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {t("View All →", "Lihat Semua →")}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
