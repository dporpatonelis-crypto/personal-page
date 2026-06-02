import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { tr } = useLanguage();

  const navItems = [
    { label: tr("nav.home"), path: "/" },
    { label: tr("nav.about"), path: "/about" },
    { label: tr("nav.academic"), path: "/academic-work" },
    { label: tr("nav.apps"), path: "/educational-apps" },
    { label: tr("nav.media"), path: "/media" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="hidden md:flex items-center gap-8">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs tracking-[0.2em] font-body font-light transition-opacity hover:opacity-60 ${
                  location.pathname === item.path ? "opacity-100" : "opacity-70"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link to="/" className="font-serif text-2xl font-light italic tracking-wide">
            D. Porpatonelis
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.slice(2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs tracking-[0.2em] font-body font-light transition-opacity hover:opacity-60 ${
                  location.pathname === item.path ? "opacity-100" : "opacity-70"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/student-portal"
              className="text-xs tracking-[0.2em] font-body font-light border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors"
            >
              {tr("nav.portal")}
            </Link>
          </div>

          <button
            className="md:hidden p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-foreground/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 left-0 h-full w-72 bg-background border-r border-border flex flex-col">
            <div className="p-6 border-b border-border flex justify-between items-center">
              <span className="font-serif text-xl italic">{tr("nav.navigation")}</span>
              <button onClick={() => setMobileOpen(false)}><X className="w-5 h-5" /></button>
            </div>
            <nav className="flex-1 py-8 px-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 font-serif text-lg italic ${
                    location.pathname === item.path
                      ? "font-bold border-l-4 border-foreground pl-3"
                      : "text-muted-foreground pl-3"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/student-portal"
                onClick={() => setMobileOpen(false)}
                className={`block py-2 font-serif text-lg italic ${
                  location.pathname === "/student-portal"
                    ? "font-bold border-l-4 border-foreground pl-3"
                    : "text-muted-foreground pl-3"
                }`}
              >
                {tr("nav.portal")}
              </Link>
            </nav>
            <div className="p-6">
              <a href="https://auth.academia.edu/DimitriosPorpatonelis" target="_blank" rel="noopener noreferrer"
                className="block w-full text-center bg-foreground text-background py-3 text-xs tracking-[0.2em] font-body">
                ACADEMIA.EDU
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
