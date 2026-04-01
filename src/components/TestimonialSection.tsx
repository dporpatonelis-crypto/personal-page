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
        <span className="text-xs tracking-[0.2em] font-body text-muted-foreground mb-6">RECENT HIGHLIGHTS</span>
        <div className="space-y-6 max-w-md">
          <div className="text-left">
            <span className="text-[9px] font-body tracking-[0.2em] text-muted-foreground">THEOLOGY · FREE</span>
            <h3 className="font-serif text-xl italic font-light mt-1">God and the Existence of Evil</h3>
            <p className="font-body text-sm text-muted-foreground mt-1">John Chrysostom «On the Devil». 4,929 views · 309 bookmarks</p>
          </div>
          <div className="text-left">
            <span className="text-[9px] font-body tracking-[0.2em] text-muted-foreground">CHRISTOLOGY · KINDLE</span>
            <h3 className="font-serif text-xl italic font-light mt-1">God and Man in Christ</h3>
            <p className="font-body text-sm text-muted-foreground mt-1">Cyril of Alexandria «Christ is One». 453 views · 61 bookmarks</p>
          </div>
          <div className="text-left">
            <span className="text-[9px] font-body tracking-[0.2em] text-muted-foreground">PATRISTICS</span>
            <h3 className="font-serif text-xl italic font-light mt-1">Attitude of the Great Fathers</h3>
            <p className="font-body text-sm text-muted-foreground mt-1">Church–State relations. 4th–5th c. Patristics. 281 views.</p>
          </div>
        </div>
        <a href="https://auth.academia.edu/DimitriosPorpatonelis" target="_blank" rel="noopener noreferrer"
          className="mt-8 text-xs tracking-[0.2em] font-body hover:opacity-60 transition-opacity underline underline-offset-4">
          VIEW ALL ON ACADEMIA.EDU →
        </a>
      </div>
    </section>
  );
};

export default TestimonialSection;
