import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SettingsPanel from "@/components/SettingsPanel";
import { useImageSettings } from "@/contexts/ImageSettingsContext";
import { useLanguage } from "@/contexts/LanguageContext";

const publications = [
  {
    year: "2024",
    title: "Sanctity and Imperial Authority",
    detail: "Doctoral Dissertation · AUTH",
    description: "The intersection of political power and holiness in early Church writings, spanning the period of the Seven Ecumenical Councils.",
    views: "4 views",
    link: "https://auth.academia.edu/DimitriosPorpatonelis",
    linkText: "View on Academia.edu →",
  },
  {
    year: "2023",
    title: "God and the Existence of Evil",
    detail: "Book · Series: Theology in Public",
    description: "John Chrysostom \"On the Devil\". Available free on Apple Books, Kobo, and as PDF. Nearly 5,000 views on Academia.edu.",
    views: "4,929 views",
    link: "https://auth.academia.edu/DimitriosPorpatonelis",
    linkText: "Download Free →",
  },
  {
    year: "2023",
    title: "God and Man in Christ",
    detail: "Book · Kindle / Apple Books",
    description: "Cyril of Alexandria \"Christ is One\". Examines the Christological synthesis of Cyril of Alexandria as a cornerstone of Orthodox theology.",
    views: "453 views",
    link: "https://www.amazon.com/dp/B00C8AUIZW",
    linkText: "View on Amazon →",
  },
  {
    year: "2022",
    title: "The Attitude of the Great Fathers toward Emperor and Political Authorities",
    detail: "Book · Kindle Edition",
    description: "A study of how Basil the Great, John Chrysostom, and Gregory the Theologian engaged with imperial power. Available in standard, Kindle, and iPad editions.",
    views: "281 views",
    link: "https://auth.academia.edu/DimitriosPorpatonelis",
    linkText: "Download →",
  },
  {
    year: "2022",
    title: "Ο Επιτάφιος του Μ. Βασιλείου",
    detail: "Apple Books (Free) · Series: Theology in Public",
    description: "Gregory the Theologian's funeral oration on Basil the Great. Free on Apple Books.",
    views: "37 views",
    link: "#",
    linkText: "View on Apple Books →",
  },
];

const AcademicWork = () => {
  const { getImageSrc, getOpacity } = useImageSettings();
  const { tr } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-16">
        <section className="p-8 md:p-16 lg:p-24 max-w-5xl mx-auto">
          <span className="text-xs tracking-[0.2em] font-body text-muted-foreground mb-4 block">{tr("academic.label")}</span>
          <h1 className="font-serif text-4xl md:text-5xl italic font-light mb-4 whitespace-pre-line">
            {tr("academic.title")}
          </h1>
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-16">
            <p className="font-body text-sm font-light text-muted-foreground max-w-lg">
              {tr("academic.desc")}
            </p>
            <a href="https://auth.academia.edu/DimitriosPorpatonelis" target="_blank" rel="noopener noreferrer"
              className="text-xs tracking-[0.2em] font-body text-muted-foreground hover:opacity-60 transition-opacity mt-2 md:mt-0">
              {tr("highlights.viewAll")}
            </a>
          </div>

          <div className="relative mb-16">
            <img
              src={getImageSrc("gallery3")}
              alt="Books"
              className="w-full h-64 object-cover"
              style={{ opacity: getOpacity("gallery3") / 100 }}
              loading="lazy"
              width={640}
              height={800}
            />
          </div>

          <div className="space-y-0">
            {publications.map((pub, i) => (
              <div key={i} className="border-t border-border py-8 grid grid-cols-12 gap-4 items-start group hover:bg-card/50 transition-colors px-4 -mx-4">
                <span className="col-span-2 text-xs font-body text-muted-foreground tracking-wide">{pub.year}</span>
                <div className="col-span-7">
                  <span className="text-[9px] font-body tracking-[0.2em] text-muted-foreground border border-border px-2 py-0.5 mb-2 inline-block">
                    {pub.detail}
                  </span>
                  <h3 className="font-serif text-lg italic font-light mt-2">{pub.title}</h3>
                  <p className="text-xs font-body text-muted-foreground mt-1 leading-relaxed">{pub.description}</p>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer"
                    className="text-xs font-body tracking-wide mt-3 inline-block hover:opacity-60 transition-opacity underline underline-offset-4">
                    {pub.linkText}
                  </a>
                </div>
                <span className="col-span-3 text-xs font-body text-muted-foreground tracking-wide text-right">
                  {pub.views}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
      <SettingsPanel />
    </div>
  );
};

export default AcademicWork;
