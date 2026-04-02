import { useImageSettings } from "@/contexts/ImageSettingsContext";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { getImageSrc, getOpacity } = useImageSettings();
  const { tr } = useLanguage();

  return (
    <section className="relative h-screen pt-16 grid grid-cols-1 md:grid-cols-2">
      <div className="relative">
        <img
          src={getImageSrc("hero1")}
          alt="Workspace"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: getOpacity("hero1") / 100 }}
          width={1024}
          height={1280}
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light italic text-primary-foreground leading-[0.95]">
            Dimitrios
            <br />
            Porpatonelis
          </h1>
          <p className="mt-6 text-sm font-body font-light text-primary-foreground/80 max-w-xs leading-relaxed whitespace-pre-line">
            {tr("hero.subtitle")}
          </p>
        </div>
      </div>

      <div className="hidden md:block relative">
        <img
          src={getImageSrc("hero2")}
          alt="Academic library"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: getOpacity("hero2") / 100 }}
          width={1024}
          height={1280}
        />
      </div>
    </section>
  );
};

export default HeroSection;
