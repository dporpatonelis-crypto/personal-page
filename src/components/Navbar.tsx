import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/about" },
  { label: "ACADEMIC WORK", path: "/academic-work" },
  { label: "EDU APPS", path: "/educational-apps" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-8">
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
          Portfolio
        </Link>

        <div className="flex items-center gap-8">
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
            STUDENT PORTAL
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
