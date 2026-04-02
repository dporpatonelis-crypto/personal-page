import { useState } from "react";
import { Settings, X, Globe } from "lucide-react";
import { useLanguage, type Lang } from "@/contexts/LanguageContext";
import { useImageSettings, IMAGE_KEYS, IMAGE_LABELS, type ImageKey } from "@/contexts/ImageSettingsContext";

const SettingsPanel = () => {
  const [open, setOpen] = useState(false);
  const { lang, setLang, tr } = useLanguage();
  const { settings, updateImage, updateOpacity, resetAll } = useImageSettings();

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[70] bg-foreground text-background w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:opacity-80 transition-opacity"
        aria-label="Settings"
      >
        <Settings className="w-5 h-5" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[80]">
          <div className="absolute inset-0 bg-foreground/50" onClick={() => setOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-80 md:w-96 bg-background border-l border-border overflow-y-auto">
            <div className="p-6 border-b border-border flex justify-between items-center">
              <h2 className="font-serif text-xl italic">{tr("settings.title")}</h2>
              <button onClick={() => setOpen(false)}><X className="w-5 h-5" /></button>
            </div>

            {/* Language */}
            <div className="p-6 border-b border-border">
              <h3 className="text-xs tracking-[0.2em] font-body text-muted-foreground mb-3 flex items-center gap-2">
                <Globe className="w-4 h-4" /> {tr("settings.language")}
              </h3>
              <div className="flex gap-2">
                {(["en", "el"] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-4 py-2 text-xs tracking-[0.15em] font-body border transition-colors ${
                      lang === l
                        ? "bg-foreground text-background border-foreground"
                        : "border-border hover:bg-card"
                    }`}
                  >
                    {l === "en" ? "English" : "Ελληνικά"}
                  </button>
                ))}
              </div>
            </div>

            {/* Images */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs tracking-[0.2em] font-body text-muted-foreground">{tr("settings.images")}</h3>
                <button
                  onClick={resetAll}
                  className="text-[10px] tracking-[0.15em] font-body text-muted-foreground underline underline-offset-4 hover:opacity-60"
                >
                  {tr("settings.reset")}
                </button>
              </div>

              <div className="space-y-6">
                {IMAGE_KEYS.map((key) => (
                  <div key={key} className="space-y-2">
                    <label className="text-xs font-body font-medium">{IMAGE_LABELS[key][lang]}</label>
                    <input
                      type="text"
                      value={settings[key].url}
                      onChange={(e) => updateImage(key as ImageKey, e.target.value)}
                      placeholder={tr("settings.url")}
                      className="w-full text-xs font-body bg-card border border-border px-3 py-2 focus:outline-none focus:border-foreground transition-colors"
                    />
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-body text-muted-foreground whitespace-nowrap">
                        {tr("settings.opacity")}: {settings[key].opacity}%
                      </span>
                      <input
                        type="range"
                        min={10}
                        max={100}
                        value={settings[key].opacity}
                        onChange={(e) => updateOpacity(key as ImageKey, Number(e.target.value))}
                        className="flex-1 h-1 accent-foreground"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsPanel;
