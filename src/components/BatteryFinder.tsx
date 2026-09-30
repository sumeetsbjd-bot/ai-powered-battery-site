"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { products, Product } from "@/data/products";
import { businessInfo } from "@/data/siteConfig";
import FinderResults from "./FinderResults";

const carModels = [
  "Perodua Myvi","Perodua Axia","Proton Saga","Proton X50","Honda City",
  "Honda Civic","Toyota Vios","Toyota Camry","Nissan Almera","Mazda CX-5",
  "BMW 3 Series","Mercedes C-Class","Hyundai Elantra","Yamaha LC135",
  "Honda Wave","Kawasaki Z250","Isuzu NPR","Hino 300",
];

export default function BatteryFinder() {
  const { t } = useLanguage();
  const [step, setStep] = useState(0);
  const [vehicleType, setVehicleType] = useState("");
  const [carModel, setCarModel] = useState("");
  const [results, setResults] = useState<Product[]>([]);

  const findBattery = (model: string) => {
    const matched = products.filter((p) =>
      p.fitsCars.some((c) => c.toLowerCase().includes(model.toLowerCase())) ||
      (vehicleType && p.category === vehicleType)
    );
    setResults(matched.length > 0 ? matched : products.filter((p) => p.category === (vehicleType || "car")).slice(0, 3));
    setStep(3);
  };

  const reset = () => { setStep(0); setVehicleType(""); setCarModel(""); setResults([]); };

  return (
    <section id="finder" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="badge-neon mb-4 inline-block">🤖 {t("AI-Powered", "Dikuasai AI")}</span>
          <h2 className="section-title text-white">{t("Battery ", "Pencari ")}<span className="glow-text">{t("Finder", "Bateri")}</span></h2>
          <p className="text-white/50 mt-3">{t("Answer 2 quick questions to find your perfect battery.", "Jawab 2 soalan ringkas untuk cari bateri sempurna.")}</p>
        </div>
        <div className="glass-strong p-6 sm:p-10">
          {/* Progress bar */}
          <div className="flex items-center gap-2 mb-8">
            {[1,2,3].map((s) => (
              <div key={s} className="flex-1 flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= s ? "bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-[#0a0e27]" : "bg-white/10 text-white/30"}`}>{s}</div>
                {s < 3 && <div className={`flex-1 h-0.5 rounded ${step >= s+1 ? "bg-[#00ff88]" : "bg-white/10"}`}/>}
              </div>
            ))}
          </div>

          {step === 0 && (
            <div className="text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-[family-name:var(--font-poppins)] font-bold text-xl text-white mb-3">{t("Let's Find Your Battery", "Jom Cari Bateri Anda")}</h3>
              <button onClick={() => setStep(1)} className="btn-neon cursor-pointer">🚀 {t("Start Now", "Mula Sekarang")}</button>
            </div>
          )}

          {step === 1 && (
            <div>
              <h3 className="font-[family-name:var(--font-poppins)] font-bold text-lg text-white mb-6">{t("What type of vehicle?", "Jenis kenderaan?")}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[{id:"car",icon:"🚗",l:"Car",bm:"Kereta"},{id:"motorcycle",icon:"🏍️",l:"Motorcycle",bm:"Motosikal"},{id:"truck",icon:"🚛",l:"Truck",bm:"Trak"},{id:"marine",icon:"⛵",l:"Marine",bm:"Marin"}].map((v) => (
                  <button key={v.id} onClick={() => {setVehicleType(v.id);setStep(2);}} className={`glass-card !rounded-2xl p-5 text-center cursor-pointer hover:!border-[#00ff88]/50 ${vehicleType===v.id?"!border-[#00ff88] !bg-[#00ff88]/10":""}`}>
                    <span className="text-4xl block mb-2">{v.icon}</span>
                    <span className="text-white text-sm font-medium">{t(v.l,v.bm)}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="font-[family-name:var(--font-poppins)] font-bold text-lg text-white mb-4">{t("Select or type your model:", "Pilih atau taip model:")}</h3>
              <input type="text" value={carModel} onChange={(e)=>setCarModel(e.target.value)} placeholder={t("e.g. Perodua Myvi...","cth. Perodua Myvi...")} className="glass-input w-full px-5 py-3 mb-4 text-sm"/>
              <div className="flex flex-wrap gap-2 mb-6 max-h-40 overflow-y-auto">
                {carModels.filter((m)=>m.toLowerCase().includes(carModel.toLowerCase())).map((m)=>(
                  <button key={m} onClick={()=>{setCarModel(m);findBattery(m);}} className="text-xs px-3 py-1.5 rounded-full glass text-white/60 hover:text-white hover:bg-white/10 cursor-pointer">{m}</button>
                ))}
              </div>
              <button onClick={()=>findBattery(carModel)} className="btn-neon cursor-pointer">🔍 {t("Find Battery","Cari Bateri")}</button>
            </div>
          )}

          {step === 3 && <FinderResults results={results} carModel={carModel} onReset={reset}/>}
        </div>
      </div>
    </section>
  );
}
