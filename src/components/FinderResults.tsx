"use client";
import { useLanguage } from "@/context/LanguageContext";
import { Product } from "@/data/products";
import { businessInfo } from "@/data/siteConfig";

interface Props {
  results: Product[];
  carModel: string;
  onReset: () => void;
}

export default function FinderResults({ results, carModel, onReset }: Props) {
  const { t } = useLanguage();

  return (
    <div>
      <h3 className="font-[family-name:var(--font-poppins)] font-bold text-lg text-white mb-2">
        🎯 {t("Recommended for You", "Disyorkan untuk Anda")}
      </h3>
      {carModel && (
        <p className="text-white/50 text-sm mb-6">
          {t("Vehicle", "Kenderaan")}: {carModel}
        </p>
      )}
      <div className="space-y-4">
        {results.map((p) => (
          <div
            key={p.id}
            className="glass-card !rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4"
          >
            <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center text-3xl shrink-0">
              🔋
            </div>
            <div className="flex-1 text-center sm:text-left">
              <span className="badge-neon text-[10px] mb-1 inline-block">
                {p.badge}
              </span>
              <h4 className="font-semibold text-white text-sm">{p.name}</h4>
              <p className="text-white/40 text-xs">
                {p.specs.voltage} • {p.specs.capacity} • {p.specs.cca} CCA •{" "}
                {p.warranty} warranty
              </p>
            </div>
            <div className="text-center sm:text-right shrink-0">
              <p className="font-[family-name:var(--font-poppins)] font-bold text-lg glow-text">
                RM{p.price}
              </p>
              <a
                href={`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(
                  `Hi, AI recommended ${p.name} (RM${p.price}) for my ${carModel}. I'd like to order!`
                )}`}
                target="_blank"
                className="btn-neon !py-1.5 !px-4 text-xs !rounded-full mt-1 inline-block"
              >
                {t("Order Now", "Tempah")}
              </a>
            </div>
          </div>
        ))}
      </div>
      <button onClick={onReset} className="btn-outline mt-6 text-sm cursor-pointer">
        🔄 {t("Search Again", "Cari Semula")}
      </button>
    </div>
  );
}
