"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "bm";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (en: string, bm: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggleLang: () => {},
  t: (en) => en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = () => setLang((prev) => (prev === "en" ? "bm" : "en"));
  const t = (en: string, bm: string) => (lang === "en" ? en : bm);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
