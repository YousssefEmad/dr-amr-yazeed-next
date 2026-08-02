import { createContext, useContext, useEffect, useState } from "react";

const LocaleContext = createContext({
  locale: "ar",
  toggleLocale: () => {},
  setLocale: () => {},
});

const STORAGE_KEY = "dr-amr-locale";

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState("ar");
  const [ready, setReady] = useState(false);

  // أول ما الصفحة تفتح في المتصفح: نجيب اللغة المحفوظة (لو موجودة)
  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (saved === "ar" || saved === "en") {
      setLocaleState(saved);
    }
    setReady(true);
  }, []);

  // كل ما اللغة تتغير: نحدّث <html lang> و <html dir> ونحفظها
  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = locale === "ar" ? "ar" : "en";
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, ready]);

  const setLocale = (next) => {
    if (next === "ar" || next === "en") setLocaleState(next);
  };

  const toggleLocale = () => {
    setLocaleState((prev) => (prev === "ar" ? "en" : "ar"));
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}

export default LocaleContext;