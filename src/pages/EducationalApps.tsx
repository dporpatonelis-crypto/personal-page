import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SettingsPanel from "@/components/SettingsPanel";
import { ArrowRight } from "lucide-react";
import { useImageSettings } from "@/contexts/ImageSettingsContext";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ImageKey } from "@/contexts/ImageSettingsContext";

const apps = [
  {
    title: "Mind Palace",
    subtitle: "Η Υπόθεση του Φιλοσόφου",
    description: "A Greek-language philosophical detective game. Students investigate doctrinal and historical questions through clue-based narrative exploration. Backend: Google Apps Script + Gemini AI.",
    tags: ["Investigation", "Game", "AI"],
    imageKey: "gallery2" as ImageKey,
    url: "https://dporpatonelis-crypto.github.io/mind-palace-cases/",
    github: "https://github.com/dporpatonelis-crypto/mind-palace-cases",
  },
  {
    title: "History Explorer 3D",
    subtitle: "NPC Dialogue System",
    description: "3D scenario rooms with interactive historical figures (Basil the Great, Aristotle). Students engage in Socratic dialogue to explore key theological and philosophical themes.",
    tags: ["3D", "NPC", "Dialogue"],
    imageKey: "gallery4" as ImageKey,
    url: "https://history-explorer-3d.vercel.app/",
    github: "#",
  },
  {
    title: "Timeline Map",
    subtitle: "Geospatial History",
    description: "Interactive Leaflet.js map with chronological timeline. Supports MP4 video, YouTube embeds, and Google Slides. Designed for visualizing Byzantine history across time and space.",
    tags: ["Leaflet.js", "Multimedia"],
    imageKey: "service" as ImageKey,
    url: "https://dporpatonelis-crypto.github.io/Map-Timeline/",
    github: "https://github.com/dporpatonelis-crypto/Map-Timeline",
  },
  {
    title: "Living Anchor",
    subtitle: "Text Analysis Hub",
    description: "Annotation and analysis workspace for patristic and theological texts. Firebase-backed storage, collaborative annotation, and deep-linking to source passages.",
    tags: ["Annotation", "Firebase"],
    imageKey: "hero1" as ImageKey,
    url: "https://idea-weaver-board.vercel.app/",
    github: "#",
  },
  {
    title: "Interactive Books",
    subtitle: "Digital Library",
    description: "Catalog-driven digital library of theological texts. Each book loaded from a central books.json manifest and rendered as an interactive, paginated HTML reader.",
    tags: ["Library", "JSON", "HTML5"],
    imageKey: "hero2" as ImageKey,
    url: "https://dporpatonelis-crypto.github.io/interactive-books/index.html",
    github: "https://github.com/dporpatonelis-crypto/interactive-books",
  },
  {
    title: "Central Console",
    subtitle: "Dashboard & Orchestrator",
    description: "Firebase-connected React Three Fiber dashboard coordinating all six applications. Includes a 3D museum scene and serves as the central hub for lesson orchestration.",
    tags: ["Firebase", "React"],
    imageKey: "gallery1" as ImageKey,
    url: "#",
    github: "#",
  },
];

const EducationalApps = () => {
  const { getImageSrc, getOpacity } = useImageSettings();
  const { tr } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-16">
        <section className="p-8 md:p-16 lg:p-24 max-w-6xl mx-auto">
          <span className="text-xs tracking-[0.2em] font-body text-muted-foreground mb-4 block">{tr("apps.label")}</span>
          <h1 className="font-serif text-4xl md:text-5xl italic font-light mb-4 whitespace-pre-line">
            {tr("apps.title")}
          </h1>
          <p className="font-body text-sm font-light text-muted-foreground max-w-2xl mb-16">
            {tr("apps.desc")}
          </p>

          <div className="space-y-16">
            {apps.map((app, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border pt-8">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={getImageSrc(app.imageKey)}
                    alt={app.title}
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    style={{ opacity: getOpacity(app.imageKey) / 100 }}
                    loading="lazy"
                    width={640}
                    height={480}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-serif text-2xl md:text-3xl italic font-light mb-1">{app.title}</h3>
                  <p className="text-xs tracking-[0.2em] font-body text-muted-foreground mb-4">{app.subtitle}</p>
                  <p className="font-body text-sm font-light text-muted-foreground leading-relaxed mb-6">
                    {app.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {app.tags.map((tag) => (
                      <span key={tag} className="text-xs font-body tracking-wide border border-border px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={app.url} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-body tracking-[0.2em] hover:opacity-60 transition-opacity">
                      {tr("apps.launch")} <ArrowRight className="w-4 h-4" />
                    </a>
                    {app.github !== "#" && (
                      <a href={app.github} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-body tracking-[0.2em] text-muted-foreground hover:opacity-60 transition-opacity">
                        GITHUB
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 border-t border-border pt-8">
            <h2 className="font-serif text-2xl italic font-light mb-6">{tr("apps.demo")}</h2>
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/Ftr5AbtSxWE?si=KR_zivqiwIqMX6Ij"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <SettingsPanel />
    </div>
  );
};

export default EducationalApps;
