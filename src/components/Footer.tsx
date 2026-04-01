const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-serif text-xl italic font-light">Portfolio</p>
        <p className="text-xs font-body text-muted-foreground tracking-wide">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
