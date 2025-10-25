import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { translations } from "@/lib/translations";

type Lang = keyof typeof translations;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof translations[Lang];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const fallbackLang: Lang = "en";
  const [lang, setLang] = useState<Lang>(fallbackLang);

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored && stored in translations) {
      setLang(stored as Lang);
    }
  }, []);
useEffect(() => {
  const fontLinks: Record<Lang, string | null> = {
    en: null,
    fa: "https://cdn.fontcdn.ir/Fonts/Vazir/Vazir.css",
    ps: "https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&display=swap",
    es: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
  };

  const href = fontLinks[lang];
  if (href) {
    const link = document.createElement("link");
    link.href = href;
    link.rel = "stylesheet";
    link.setAttribute("data-lang-font", lang); // برای مدیریت بهتر
    document.head.appendChild(link);
  }

  return () => {
    // حذف فونت قبلی هنگام تغییر زبان
    document.querySelectorAll('link[data-lang-font]').forEach((el) => el.remove());
  };
}, [lang]);

  const handleSetLang = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = useMemo(() => translations[lang] || translations[fallbackLang], [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};