"use client";
import { useLanguage } from "@/context/LanguageContext";
import { testimonials } from "@/data/siteConfig";

const personImages = [
  "/images/testimonials/person1.jpg",
  "/images/testimonials/person2.jpg",
  "/images/testimonials/person3.jpg",
  "/images/testimonials/person4.jpg",
  "/images/testimonials/person5.jpg",
  "/images/testimonials/person6.jpg",
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="badge-neon mb-4 inline-block">{t("⭐ Reviews", "⭐ Ulasan")}</span>
          <h2 className="section-title text-white">
            {t("What Our ", "Apa Kata ")}<span className="glow-text">{t("Customers Say", "Pelanggan Kami")}</span>
          </h2>
          <p className="text-white/50 mt-4">
            {t("Trusted by 15,000+ Malaysian drivers", "Dipercayai oleh 15,000+ pemandu Malaysia")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((review, i) => (
            <div key={i} className="glass-card p-6">
              {/* Stars */}
              <div className="stars text-lg mb-3">
                {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-4 italic">
                &ldquo;{t(review.text, review.textBM)}&rdquo;
              </p>

              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                {/* Avatar */}
                <img src={personImages[i] || personImages[0]} alt={review.name} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                <div>
                  <p className="text-white text-sm font-semibold">{review.name}</p>
                  <p className="text-white/40 text-xs">{review.car} • {review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
