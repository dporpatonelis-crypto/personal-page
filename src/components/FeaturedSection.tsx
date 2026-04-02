import { useImageSettings } from "@/contexts/ImageSettingsContext";
import { useLanguage } from "@/contexts/LanguageContext";

const FeaturedSection = () => {
  const { getImageSrc, getOpacity } = useImageSettings();
  const { tr } = useLanguage();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-border">
      <div className="p-8 md:p-16 flex flex-col justify-center">
        <span className="text-xs tracking-[0.2em] font-body text-muted-foreground mb-4">{tr("featured.label")}</span>
        <h2 className="font-serif text-3xl md:text-4xl italic font-light mb-6">{tr("featured.title")}</h2>
        <p className="font-body text-sm font-light text-muted-foreground leading-relaxed max-w-md mb-6">
          {tr("featured.desc")}
        </p>
        <div className="space-y-2 text-xs font-body text-muted-foreground tracking-wide">
          <p>{tr("featured.i1")}</p>
          <p>{tr("featured.i2")}</p>
          <p>{tr("featured.i3")}</p>
          <p>{tr("featured.i4")}</p>
        </div>
      </div>
      <div className="relative min-h-[400px]">
        <img
          src={getImageSrc("service")}
          alt="Academic work"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: getOpacity("service") / 100 }}
          loading="lazy"
          width={640}
          height={800}
        />
      </div>
    </section>
  );
};

export default FeaturedSection;
