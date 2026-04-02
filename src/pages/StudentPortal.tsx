import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SettingsPanel from "@/components/SettingsPanel";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const resourceKeys = [
  { titleKey: "portal.r1.title", descKey: "portal.r1.desc", icon: "📚" },
  { titleKey: "portal.r2.title", descKey: "portal.r2.desc", icon: "📝" },
  { titleKey: "portal.r3.title", descKey: "portal.r3.desc", icon: "🕐" },
  { titleKey: "portal.r4.title", descKey: "portal.r4.desc", icon: "💬" },
  { titleKey: "portal.r5.title", descKey: "portal.r5.desc", icon: "📊" },
  { titleKey: "portal.r6.title", descKey: "portal.r6.desc", icon: "🔬" },
];

const StudentPortal = () => {
  const { tr } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-16">
        <section className="p-8 md:p-16 lg:p-24 max-w-5xl mx-auto">
          <span className="text-xs tracking-[0.2em] font-body text-muted-foreground mb-4 block">{tr("portal.label")}</span>
          <h1 className="font-serif text-4xl md:text-5xl italic font-light mb-4 whitespace-pre-line">
            {tr("portal.title")}
          </h1>
          <p className="font-body text-sm font-light text-muted-foreground max-w-lg mb-16">
            {tr("portal.desc")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {resourceKeys.map((r, i) => (
              <div key={i} className="bg-background p-8 group hover:bg-card transition-colors cursor-pointer">
                <span className="text-3xl mb-4 block">{r.icon}</span>
                <h3 className="font-serif text-xl italic font-light mb-2">{tr(r.titleKey)}</h3>
                <p className="font-body text-xs font-light text-muted-foreground leading-relaxed mb-4">
                  {tr(r.descKey)}
                </p>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-border pt-8">
            <h2 className="font-serif text-2xl italic font-light mb-4">{tr("portal.announcements")}</h2>
            <div className="space-y-4">
              <div className="border-b border-border pb-4">
                <p className="text-xs font-body text-muted-foreground tracking-wide mb-1">APRIL 1, 2026</p>
                <p className="font-body text-sm font-light">Final exam schedule has been posted. Please check your course pages for details.</p>
              </div>
              <div className="border-b border-border pb-4">
                <p className="text-xs font-body text-muted-foreground tracking-wide mb-1">MARCH 25, 2026</p>
                <p className="font-body text-sm font-light">New research assistant positions available for Summer 2026. Apply by April 15.</p>
              </div>
              <div className="border-b border-border pb-4">
                <p className="text-xs font-body text-muted-foreground tracking-wide mb-1">MARCH 20, 2026</p>
                <p className="font-body text-sm font-light">Workshop on academic writing: Register now for the April 10 session.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <SettingsPanel />
    </div>
  );
};

export default StudentPortal;
