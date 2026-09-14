import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SettingsPanel from "@/components/SettingsPanel";
import { ArrowRight, ExternalLink, Link2, Play, Presentation } from "lucide-react";
import { useImageSettings } from "@/contexts/ImageSettingsContext";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ImageKey } from "@/contexts/ImageSettingsContext";

const apps = [
  {
    title: "Idea Weaver Board",
    subtitle: "Interactive Idea Board",
    description: "Interactive educational board for connecting ideas, clues, evidence, and notes. Students can build visual investigations and save or import board libraries.",
    tags: ["Ideas", "Board", "Education"],
    imageKey: "gallery1" as ImageKey,
    url: "https://idea-weaver-board.vercel.app/",
    github: "#",
  },
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
    title: "Light Up Legacy",
    subtitle: "Interpretive Sculpture · VR Quest",
    description: "Interactive educational experience in interpretive sculpture. Students explore a VR quest inspired by Basil the Great and the Basiliad, with their words lighting the sculpture.",
    tags: ["VR", "Interactive", "Sculpture"],
    imageKey: "hero1" as ImageKey,
    url: "https://dporpatonelis-crypto.github.io/light-up-legacy/public/game.html",
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
];


const classroomLinks = [
  {
    titleKey: "apps.classroom.video",
    descriptionKey: "apps.classroom.videoDesc",
    domain: "youtu.be",
    url: "https://youtu.be/-2kH2aSh61M?is=leCV-Zw9ZMXEdVlV",
    icon: Play,
  },
  {
    titleKey: "apps.classroom.board",
    descriptionKey: "apps.classroom.boardDesc",
    domain: "docs.google.com/presentation",
    url: "https://docs.google.com/presentation/d/1JOuvpoACUR5JpgLpPFAv5dHMsY4kJTVqhpXPqlH-nfw/mobilepresent?slide=id.tpl_investigation_v1",
    icon: Presentation,
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

          <div className="mt-20 border-t border-border pt-12">
            <div className="max-w-3xl">
              <span className="text-xs tracking-[0.2em] font-body text-muted-foreground mb-4 block">
                {tr("apps.classroom.label")}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl italic font-light mb-4">
                {tr("apps.classroom.title")}
              </h2>
              <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">
                {tr("apps.classroom.desc")}
              </p>
            </div>

            <div className="mt-8 overflow-hidden border border-border bg-card/40">
              <div className="hidden md:grid grid-cols-[minmax(0,1fr)_auto] gap-6 border-b border-border bg-muted/30 px-6 py-3">
                <span className="text-[0.65rem] tracking-[0.18em] font-body text-muted-foreground">
                  {tr("apps.classroom.resource")}
                </span>
                <span className="text-[0.65rem] tracking-[0.18em] font-body text-muted-foreground">
                  {tr("apps.classroom.action")}
                </span>
              </div>

              <div className="divide-y divide-border">
                {classroomLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <div
                      key={link.url}
                      className="group grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] items-center gap-5 px-5 py-5 md:px-6 hover:bg-accent/30 transition-colors"
                    >
                      <div className="flex min-w-0 items-start gap-4">
                        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-background text-muted-foreground transition-colors group-hover:border-foreground/40 group-hover:text-foreground">
                          <Icon className="w-4 h-4" strokeWidth={1.5} />
                        </span>
                        <div className="min-w-0">
                          <h3 className="font-serif text-xl italic font-light mb-1">
                            {tr(link.titleKey)}
                          </h3>
                          <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">
                            {tr(link.descriptionKey)}
                          </p>
                          <span className="mt-2 block truncate text-[0.65rem] tracking-[0.1em] text-muted-foreground/80">
                            {link.domain}
                          </span>
                        </div>
                      </div>

                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit items-center gap-2 text-xs font-body tracking-[0.18em] underline-offset-4 hover:underline md:justify-self-end"
                      >
                        {tr("apps.classroom.open")} <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-20 border-t border-border pt-8">
            <h2 className="font-serif text-2xl italic font-light mb-6">{tr("apps.demo")}</h2>
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/-2kH2aSh61M"
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
