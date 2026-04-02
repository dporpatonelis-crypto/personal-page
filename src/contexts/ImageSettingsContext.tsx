import { createContext, useContext, useState, ReactNode } from "react";

// Default images (imported assets)
import heroImage1 from "@/assets/hero-1.jpg";
import heroImage2 from "@/assets/hero-2.jpg";
import serviceImage from "@/assets/service-image.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

export const IMAGE_KEYS = [
  "hero1", "hero2", "service", "gallery1", "gallery2", "gallery3", "gallery4",
] as const;

export type ImageKey = (typeof IMAGE_KEYS)[number];

export const IMAGE_LABELS: Record<ImageKey, Record<"en" | "el", string>> = {
  hero1: { en: "Hero Left", el: "Hero Αριστερά" },
  hero2: { en: "Hero Right", el: "Hero Δεξιά" },
  service: { en: "Featured Section", el: "Προβεβλημένη Ενότητα" },
  gallery1: { en: "Gallery 1", el: "Γκαλερί 1" },
  gallery2: { en: "Gallery 2", el: "Γκαλερί 2" },
  gallery3: { en: "Gallery 3", el: "Γκαλερί 3" },
  gallery4: { en: "Gallery 4", el: "Γκαλερί 4" },
};

const DEFAULTS: Record<ImageKey, string> = {
  hero1: heroImage1,
  hero2: heroImage2,
  service: serviceImage,
  gallery1: gallery1,
  gallery2: gallery2,
  gallery3: gallery3,
  gallery4: gallery4,
};

interface ImageSetting {
  url: string; // empty = use default
  opacity: number; // 0-100
}

type ImageSettings = Record<ImageKey, ImageSetting>;

const defaultSettings = (): ImageSettings => {
  const s = {} as ImageSettings;
  IMAGE_KEYS.forEach((k) => (s[k] = { url: "", opacity: 100 }));
  return s;
};

const loadSettings = (): ImageSettings => {
  try {
    const saved = localStorage.getItem("image-settings");
    if (saved) return { ...defaultSettings(), ...JSON.parse(saved) };
  } catch {}
  return defaultSettings();
};

interface ImageSettingsContextType {
  getImageSrc: (key: ImageKey) => string;
  getOpacity: (key: ImageKey) => number;
  settings: ImageSettings;
  updateImage: (key: ImageKey, url: string) => void;
  updateOpacity: (key: ImageKey, opacity: number) => void;
  resetAll: () => void;
}

const ImageSettingsContext = createContext<ImageSettingsContextType>({
  getImageSrc: () => "",
  getOpacity: () => 100,
  settings: defaultSettings(),
  updateImage: () => {},
  updateOpacity: () => {},
  resetAll: () => {},
});

export const ImageSettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<ImageSettings>(loadSettings);

  const save = (s: ImageSettings) => {
    setSettings(s);
    localStorage.setItem("image-settings", JSON.stringify(s));
  };

  const getImageSrc = (key: ImageKey) => settings[key].url || DEFAULTS[key];
  const getOpacity = (key: ImageKey) => settings[key].opacity;

  const updateImage = (key: ImageKey, url: string) => {
    save({ ...settings, [key]: { ...settings[key], url } });
  };

  const updateOpacity = (key: ImageKey, opacity: number) => {
    save({ ...settings, [key]: { ...settings[key], opacity } });
  };

  const resetAll = () => save(defaultSettings());

  return (
    <ImageSettingsContext.Provider value={{ getImageSrc, getOpacity, settings, updateImage, updateOpacity, resetAll }}>
      {children}
    </ImageSettingsContext.Provider>
  );
};

export const useImageSettings = () => useContext(ImageSettingsContext);
