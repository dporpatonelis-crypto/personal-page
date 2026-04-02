import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { tr } = useLanguage();

  return (
    <footer className="bg-card border-t border-border py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-6 mb-2">
          <a href="https://auth.academia.edu/DimitriosPorpatonelis" target="_blank" rel="noopener noreferrer"
            className="text-xs font-body text-muted-foreground tracking-[0.2em] hover:opacity-60 transition-opacity underline underline-offset-4 decoration-dotted">
            ACADEMIA.EDU
          </a>
          <a href="https://www.amazon.com/s?k=Porpatonelis" target="_blank" rel="noopener noreferrer"
            className="text-xs font-body text-muted-foreground tracking-[0.2em] hover:opacity-60 transition-opacity underline underline-offset-4 decoration-dotted">
            AMAZON
          </a>
        </div>
        <div className="h-px w-16 bg-border" />
        <p className="text-[10px] font-body text-muted-foreground tracking-[0.2em]">
          {tr("footer.copy")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
