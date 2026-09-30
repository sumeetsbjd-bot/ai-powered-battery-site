"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { products, categories } from "@/data/products";
import { businessInfo } from "@/data/siteConfig";

const productImages: Record<string, string> = {
  "amaron-go-ns60": "/images/products/amaron-ns60.jpg",
  "century-ns70": "/images/products/century-ns70.jpg",
  "varta-din66": "/images/products/varta-din66.jpg",
  "yokohama-ytx7": "/images/products/yokohama-ytx7.jpg",
  "yuasa-ytx9": "/images/products/yuasa-ytx9.jpg",
  "century-n120": "/images/products/century-n120.jpg",
  "optima-d31m": "/images/products/optima-d31m.jpg",
  "amaron-din55": "/images/products/amaron-din55.jpg",
};

export default function Products() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="badge-neon mb-4 inline-block">{t("⚡ Our Products", "⚡ Produk Kami")}</span>
          <h2 className="section-title text-white">
            {t("Premium ", "Bateri ")}<span className="glow-text">{t("Batteries", "Premium")}</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button onClick={() => setActiveCategory("all")} className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${activeCategory === "all" ? "btn-neon !py-2 !px-5" : "glass text-white/60 hover:text-white hover:bg-white/10"}`}>
            {t("All", "Semua")}
          </button>
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${activeCategory === cat.id ? "btn-neon !py-2 !px-5" : "glass text-white/60 hover:text-white hover:bg-white/10"}`}>
              {cat.icon} {t(cat.name, cat.nameBM)}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((product) => (
            <div key={product.id} className="glass-card p-5 flex flex-col group">
              {/* Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="badge-neon text-[11px]">{product.badge}</span>
                <span className="text-yellow-400 text-xs">{"★".repeat(Math.round(product.rating))} {product.rating}</span>
              </div>

              {/* Product image */}
              <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] overflow-hidden mb-4 relative">
                <img src={productImages[product.id] || "/images/products/amaron-ns60.jpg"} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27]/60 via-transparent to-transparent" />
              </div>

              {/* Info */}
              <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-white text-sm mb-1">{product.name}</h3>
              <p className="text-white/40 text-xs mb-2">{t(product.description, product.descriptionBM)}</p>

              {/* Specs */}
              <div className="flex flex-wrap gap-1 mb-3">
                {Object.entries(product.specs).map(([k, v]) => (
                  <span key={k} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/50">{v}</span>
                ))}
              </div>

              {/* Fits */}
              <p className="text-[10px] text-white/30 mb-3">{t("Fits: ", "Sesuai: ")}{product.fitsCars.slice(0, 3).join(", ")}{product.fitsCars.length > 3 ? ` +${product.fitsCars.length - 3}` : ""}</p>

              {/* Price + CTA */}
              <div className="mt-auto flex items-end justify-between">
                <div>
                  <span className="text-white/40 text-xs line-through">RM{product.originalPrice}</span>
                  <p className="font-[family-name:var(--font-poppins)] font-bold text-xl glow-text">RM{product.price}</p>
                  <span className="text-[10px] text-white/30">{t("Warranty: ", "Waranti: ")}{product.warranty}</span>
                </div>
                <a
                  href={`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in ${product.name} (RM${product.price}). Is it available?`)}`}
                  target="_blank"
                  className="btn-neon !py-2 !px-4 text-xs !rounded-xl"
                >
                  {t("Order", "Tempah")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
