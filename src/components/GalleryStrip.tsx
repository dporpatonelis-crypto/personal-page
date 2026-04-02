import { useImageSettings } from "@/contexts/ImageSettingsContext";
import type { ImageKey } from "@/contexts/ImageSettingsContext";

const keys: ImageKey[] = ["gallery1", "gallery2", "gallery3", "gallery4", "hero1"];

const GalleryStrip = () => {
  const { getImageSrc, getOpacity } = useImageSettings();

  return (
    <section className="grid grid-cols-2 md:grid-cols-5">
      {keys.map((key, i) => (
        <div key={i} className="relative aspect-square overflow-hidden">
          <img
            src={getImageSrc(key)}
            alt={`Gallery ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            style={{ opacity: getOpacity(key) / 100 }}
            loading="lazy"
            width={640}
            height={640}
          />
        </div>
      ))}
    </section>
  );
};

export default GalleryStrip;
