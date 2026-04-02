import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SettingsPanel from "@/components/SettingsPanel";
import { useImageSettings } from "@/contexts/ImageSettingsContext";
import { useLanguage } from "@/contexts/LanguageContext";

const interestKeys = [
  "interest.patristics", "interest.theology", "interest.political", "interest.church",
  "interest.early", "interest.byzantine", "interest.digital", "interest.comparative",
];

const About = () => {
  const { getImageSrc, getOpacity } = useImageSettings();
  const { tr } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-16">
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
          <div className="relative">
            <img
              src={getImageSrc("hero2")}
              alt="Dimitrios Porpatonelis"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: getOpacity("hero2") / 100 }}
              width={1024}
              height={1280}
            />
          </div>
          <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center">
            <span className="text-xs tracking-[0.2em] font-body text-muted-foreground mb-4">{tr("about.label")}</span>
            <h1 className="font-serif text-4xl md:text-5xl italic font-light mb-2">
              Dimitrios<br />Porpatonelis
            </h1>
            <p className="text-xs tracking-[0.18em] font-body text-muted-foreground mb-8">
              {tr("about.position")}
            </p>
            <div className="space-y-4 font-body text-sm font-light text-muted-foreground leading-relaxed max-w-md">
              <p>{tr("about.bio")}</p>
              <div className="pt-2">
                <p className="text-xs tracking-[0.2em] font-body text-muted-foreground mb-2">{tr("about.teaching")}</p>
                <p className="font-body text-sm italic">{tr("about.school")}</p>
              </div>
              <div className="pt-2">
                <p className="text-xs tracking-[0.2em] font-body text-muted-foreground mb-3">{tr("about.interests")}</p>
                <div className="flex flex-wrap gap-2">
                  {interestKeys.map((key) => (
                    <span key={key} className="text-[10px] tracking-[0.12em] uppercase font-body border border-border px-3 py-1">
                      {tr(key)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <p className="font-serif text-3xl italic font-light">302</p>
                <p className="text-xs font-body text-muted-foreground tracking-wide mt-1">{tr("about.followers")}</p>
              </div>
              <div>
                <p className="font-serif text-3xl italic font-light">6,979</p>
                <p className="text-xs font-body text-muted-foreground tracking-wide mt-1">{tr("about.views")}</p>
              </div>
              <div>
                <p className="font-serif text-3xl italic font-light">79</p>
                <p className="text-xs font-body text-muted-foreground tracking-wide mt-1">{tr("about.following")}</p>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <a href="https://auth.academia.edu/DimitriosPorpatonelis" target="_blank" rel="noopener noreferrer"
                className="text-xs tracking-[0.2em] font-body hover:opacity-60 transition-opacity underline underline-offset-4">
                ACADEMIA.EDU
              </a>
              <a href="https://www.amazon.com/s?k=Porpatonelis" target="_blank" rel="noopener noreferrer"
                className="text-xs tracking-[0.2em] font-body hover:opacity-60 transition-opacity underline underline-offset-4">
                AMAZON
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <SettingsPanel />
    </div>
  );
};

export default About;
