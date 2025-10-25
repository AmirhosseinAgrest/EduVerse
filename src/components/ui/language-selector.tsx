// src/components/ui/language-selector.tsx
import { useEffect, useRef, useState } from "react";
import { Globe, Search } from "lucide-react";
import { languages, translations } from "@/lib/translations";

export const LanguageSelector = () => {
  const [selectedLang, setSelectedLang] = useState("en");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored) setSelectedLang(stored);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (id: string) => {
    setSelectedLang(id);
    localStorage.setItem("lang", id);
    setOpen(false);
    // اینجا می‌تونی context یا i18n رو هم آپدیت کنی
  };

  const filtered = languages.filter((lang) =>
    lang.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div ref={containerRef} className="relative w-full sm:w-64">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2 border border-border rounded-md bg-background text-sm hover:shadow-glow transition-all"
      >
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-muted-foreground" />
          <span>{translations[selectedLang]?.languageLabel || "Language"}</span>
        </div>
        <span className="text-xs text-muted-foreground">▼</span>
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-full bg-card border border-border rounded-md shadow-glow p-2">
          <div className="flex items-center gap-2 mb-2 px-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search language..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm focus:outline-none"
            />
          </div>
          <div className="max-h-48 overflow-y-auto">
            {filtered.map((lang) => (
              <button
                key={lang.id}
                onClick={() => handleSelect(lang.id)}
                className={`w-full text-left px-3 py-2 text-sm rounded hover:bg-accent ${
                  selectedLang === lang.id ? "bg-accent/50 font-semibold" : ""
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};