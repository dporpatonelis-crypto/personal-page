import heroImage1 from "@/assets/hero-1.jpg";
import heroImage2 from "@/assets/hero-2.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen pt-16 grid grid-cols-1 md:grid-cols-2">
      <div className="relative">
        <img
          src={heroImage1}
          alt="Workspace"
          className="absolute inset-0 w-full h-full object-cover"
          width={1024}
          height={1280}
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light italic text-primary-foreground leading-[0.95]">
            Personal
            <br />
            Academic
            <br />
            Portfolio
          </h1>
          <p className="mt-6 text-sm font-body font-light text-primary-foreground/80 max-w-xs leading-relaxed">
            Exploring education through research, technology, and innovative learning experiences.
          </p>
        </div>
      </div>

      <div className="hidden md:block relative">
        <img
          src={heroImage2}
          alt="Portrait"
          className="absolute inset-0 w-full h-full object-cover"
          width={1024}
          height={1280}
        />
      </div>
    </section>
  );
};

export default HeroSection;
