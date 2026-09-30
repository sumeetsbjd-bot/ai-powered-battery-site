"use client";
import { useLanguage } from "@/context/LanguageContext";
import { businessInfo } from "@/data/siteConfig";

export default function Hero() {
  const { t } = useLanguage();
  const waLink = `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(t("Hi, I need a battery!", "Hai, saya perlukan bateri!"))}`;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Hero background image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img src="/images/hero/hero-wide.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.12]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27] via-[#0a0e27]/80 to-[#0a0e27]" />
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-[#00ff88]/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-40 right-[15%] w-96 h-96 bg-[#00d4ff]/8 rounded-full blur-[140px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 left-[30%] w-80 h-80 bg-[#a855f7]/8 rounded-full blur-[130px] animate-float" style={{ animationDelay: "4s" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 badge-neon mb-6">
            <span className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
            {t("🔋 #1 Battery Shop in Malaysia", "🔋 Kedai Bateri #1 di Malaysia")}
          </div>
          <h1 className="font-[family-name:var(--font-poppins)] font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6">
            {t("Power Up", "Kuasakan")}{" "}
            <span className="glow-text">{t("Your Ride", "Kenderaan Anda")}</span><br />
            {t("with Confidence", "dengan Yakin")}
          </h1>
          <p className="text-lg sm:text-xl text-white/60 mb-8 max-w-xl mx-auto lg:mx-0">
            {t(
              "Premium batteries with FREE same-day installation across KL & Selangor. AI-powered recommendations to find your perfect match.",
              "Bateri premium dengan pemasangan PERCUMA hari sama di KL & Selangor. Cadangan AI untuk pilihan terbaik."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#finder" className="btn-neon text-center text-base">🔍 {t("Find My Battery", "Cari Bateri Saya")}</a>
            <a href={waLink} target="_blank" className="btn-outline text-center text-base">💬 {t("WhatsApp Us", "WhatsApp Kami")}</a>
          </div>
          <div className="flex flex-wrap items-center gap-6 mt-10 justify-center lg:justify-start">
            {[
              { value: "15K+", label: t("Batteries Sold", "Bateri Dijual") },
              { value: "4.8★", label: t("Google Rating", "Rating Google") },
              { value: "45min", label: t("Emergency ETA", "ETA Kecemasan") },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-xl font-bold glow-text">{s.value}</p>
                <p className="text-xs text-white/40">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Battery Visual */}
        <HeroBatteryVisual />
      </div>
    </section>
  );
}

function HeroBatteryVisual() {
  const { t } = useLanguage();
  return (
    <div className="relative flex items-center justify-center">
      <div className="relative w-72 h-72 sm:w-96 sm:h-96">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 blur-3xl animate-pulse-glow" />
        <div className="absolute inset-4 rounded-full glass-strong flex items-center justify-center animate-pulse-glow">
          <div className="text-center">
            <img src="/images/hero/hero-battery.jpg" alt="Battery" className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover mx-auto mb-3 border border-white/10" />
            <p className="font-[family-name:var(--font-poppins)] font-bold text-2xl glow-text">{t("From", "Dari")}</p>
            <p className="font-[family-name:var(--font-poppins)] font-extrabold text-4xl sm:text-5xl text-white">RM85</p>
          </div>
        </div>
        {[{ e: "🚗", l: "Car", lbm: "Kereta", cls: "-top-4 right-4", d: "1s" },
          { e: "🏍️", l: "Motor", lbm: "Motor", cls: "top-1/4 -right-8", d: "2s" },
          { e: "🚛", l: "Truck", lbm: "Trak", cls: "bottom-8 -right-4", d: "3s" },
          { e: "⛵", l: "Marine", lbm: "Marin", cls: "bottom-0 left-4", d: "4s" },
        ].map((i) => (
          <div key={i.l} className={`absolute ${i.cls} glass-card !rounded-2xl px-4 py-3 animate-float text-center`} style={{ animationDelay: i.d }}>
            <span className="text-2xl">{i.e}</span>
            <p className="text-[10px] text-white/50 mt-1">{t(i.l, i.lbm)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
