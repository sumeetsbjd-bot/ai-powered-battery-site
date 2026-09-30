"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { businessInfo } from "@/data/siteConfig";

export default function QuoteForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name:"",phone:"",email:"",carModel:"",batterySize:"",
    installDate:"",message:"",newsletter:false,
  });
  const [submitted, setSubmitted] = useState(false);
  const u = (f:string,v:string|boolean) => setForm(p=>({...p,[f]:v}));

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    const msg = `🔋 *New Enquiry*\n👤 ${form.name}\n📱 ${form.phone}\n📧 ${form.email}\n🚗 ${form.carModel}\n🔋 ${form.batterySize}\n📅 ${form.installDate}\n💬 ${form.message}\n📰 Newsletter: ${form.newsletter?"Yes":"No"}`;
    window.open(`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(msg)}`,"_blank");
    setSubmitted(true);
  };

  if(submitted){
    return(
      <section id="contact" className="py-20"><div className="max-w-2xl mx-auto px-4 text-center">
        <div className="glass-strong p-10">
          <div className="text-6xl mb-4">✅</div>
          <h3 className="font-[family-name:var(--font-poppins)] font-bold text-2xl text-white mb-3">{t("Enquiry Sent!","Pertanyaan Dihantar!")}</h3>
          <p className="text-white/50 mb-6">{t("We'll reply within 30 minutes via WhatsApp.","Kami akan balas dalam 30 minit melalui WhatsApp.")}</p>
          <button onClick={()=>setSubmitted(false)} className="btn-outline cursor-pointer">{t("Send Another","Hantar Lagi")}</button>
        </div>
      </div></section>
    );
  }

  return(
    <section id="contact" className="py-20 relative"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <span className="badge-neon mb-4 inline-block">{t("📋 Get a Quote","📋 Dapatkan Sebut Harga")}</span>
        <h2 className="section-title text-white">{t("Request ","Minta ")}<span className="glow-text">{t("a Quote","Sebut Harga")}</span></h2>
        <p className="text-white/50 mt-3">{t("Fill in and we'll WhatsApp you within 30 minutes!","Isi borang dan kami WhatsApp anda dalam 30 minit!")}</p>
      </div>
      <form onSubmit={handleSubmit} className="glass-strong p-6 sm:p-10">
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <InputField label={t("Full Name *","Nama Penuh *")} required type="text" value={form.name} onChange={v=>u("name",v)} placeholder="Ahmad bin Ali"/>
          <InputField label={t("Phone *","No. Telefon *")} required type="tel" value={form.phone} onChange={v=>u("phone",v)} placeholder="+60 12-345 6789"/>
          <InputField label={t("Email","Emel")} type="email" value={form.email} onChange={v=>u("email",v)} placeholder="email@example.com"/>
          <InputField label={t("Car Model *","Model Kereta *")} required type="text" value={form.carModel} onChange={v=>u("carModel",v)} placeholder={t("e.g. Perodua Myvi 2023","cth. Perodua Myvi 2023")}/>
          <div>
            <label className="text-white/60 text-xs mb-1.5 block">{t("Battery Size","Saiz Bateri")}</label>
            <select value={form.batterySize} onChange={e=>u("batterySize",e.target.value)} className="glass-input w-full px-4 py-3 text-sm">
              <option value="">{t("Not sure","Tidak pasti")}</option>
              <option>NS40</option><option>NS60</option><option>NS70</option>
              <option>DIN55</option><option>DIN66</option><option>Other</option>
            </select>
          </div>
          <InputField label={t("Preferred Date","Tarikh Pilihan")} type="date" value={form.installDate} onChange={v=>u("installDate",v)}/>
        </div>
        <div className="mb-4">
          <label className="text-white/60 text-xs mb-1.5 block">{t("Message","Mesej")}</label>
          <textarea value={form.message} onChange={e=>u("message",e.target.value)} rows={3} className="glass-input w-full px-4 py-3 text-sm resize-none" placeholder={t("Any details...","Sebarang butiran...")}/>
        </div>
        <label className="flex items-center gap-3 mb-6 cursor-pointer">
          <input type="checkbox" checked={form.newsletter} onChange={e=>u("newsletter",e.target.checked)} className="w-4 h-4 accent-[#00ff88]"/>
          <span className="text-white/50 text-sm">{t("Subscribe to WhatsApp newsletter","Langgan newsletter WhatsApp")}</span>
        </label>
        <button type="submit" className="btn-neon w-full text-base cursor-pointer">📱 {t("Send to WhatsApp","Hantar ke WhatsApp")}</button>
      </form>
    </div></section>
  );
}

function InputField({label,required,type,value,onChange,placeholder}:{label:string;required?:boolean;type:string;value:string;onChange:(v:string)=>void;placeholder?:string}){
  return(
    <div>
      <label className="text-white/60 text-xs mb-1.5 block">{label}</label>
      <input required={required} type={type} value={value} onChange={e=>onChange(e.target.value)} className="glass-input w-full px-4 py-3 text-sm" placeholder={placeholder}/>
    </div>
  );
}
