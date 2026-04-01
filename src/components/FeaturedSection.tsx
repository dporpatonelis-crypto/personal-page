import serviceImage from "@/assets/service-image.jpg";

const FeaturedSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-border">
      <div className="p-8 md:p-16 flex flex-col justify-center">
        <span className="text-xs tracking-[0.2em] font-body text-muted-foreground mb-4">01</span>
        <h2 className="font-serif text-3xl md:text-4xl italic font-light mb-6">The Intellectual Ledger</h2>
        <p className="font-body text-sm font-light text-muted-foreground leading-relaxed max-w-md mb-6">
          Research spanning Patristics, Political Theology, and Digital Pedagogy — 
          bridging the scholarship of the Church Fathers with innovative educational technology.
        </p>
        <div className="space-y-2 text-xs font-body text-muted-foreground tracking-wide">
          <p>→ Patristics & Church Fathers</p>
          <p>→ Political Philosophy & Theology</p>
          <p>→ Byzantine History</p>
          <p>→ Digital Pedagogy</p>
        </div>
      </div>
      <div className="relative min-h-[400px]">
        <img
          src={serviceImage}
          alt="Academic work"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          width={640}
          height={800}
        />
      </div>
    </section>
  );
};

export default FeaturedSection;
