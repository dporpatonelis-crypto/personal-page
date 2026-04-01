import gallery1 from "@/assets/gallery-1.jpg";

const TestimonialSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-border">
      <div className="relative min-h-[400px]">
        <img
          src={gallery1}
          alt="Decorative"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          width={640}
          height={800}
        />
      </div>
      <div className="p-8 md:p-16 flex flex-col justify-center items-center text-center">
        <span className="text-xs tracking-[0.2em] font-body text-muted-foreground mb-6">QUOTE</span>
        <blockquote className="font-serif text-xl md:text-2xl italic font-light leading-relaxed max-w-md mb-8">
          "Your creativity and attention to detail always exceed my expectations."
        </blockquote>
        <p className="font-body text-sm font-light text-muted-foreground leading-relaxed max-w-sm mb-6">
          Working with you is truly one of the most exciting and reassuring experiences. 
          Every time I see your work, I feel pure joy.
        </p>
        <p className="text-xs tracking-[0.2em] font-body text-muted-foreground">
          — COLLEAGUE, UNIVERSITY DEPT.
        </p>
      </div>
    </section>
  );
};

export default TestimonialSection;
