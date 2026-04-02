import { useLanguage } from "@/contexts/LanguageContext";

const MarqueeStrip = () => {
  const { tr } = useLanguage();
  const text = tr("marquee.text");
  const items = Array(10).fill(text);

  return (
    <div className="bg-marquee text-marquee-foreground py-3 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="mx-8 text-sm tracking-[0.3em] font-body font-light">
            {item} •
          </span>
        ))}
        {items.map((item, i) => (
          <span key={`dup-${i}`} className="mx-8 text-sm tracking-[0.3em] font-body font-light">
            {item} •
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
