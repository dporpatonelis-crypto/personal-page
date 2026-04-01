import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import gallery3 from "@/assets/gallery-3.jpg";

const publications = [
  {
    year: "2025",
    title: "Digital Learning Environments and Student Engagement",
    journal: "Journal of Educational Technology",
    type: "Research Paper",
  },
  {
    year: "2024",
    title: "Gamification in Higher Education: A Meta-Analysis",
    journal: "Computers & Education",
    type: "Meta-Analysis",
  },
  {
    year: "2024",
    title: "Mobile Learning Apps for STEM Education",
    journal: "British Journal of Educational Technology",
    type: "Research Paper",
  },
  {
    year: "2023",
    title: "Adaptive Learning Systems: Design Principles",
    journal: "Educational Research Review",
    type: "Review Article",
  },
  {
    year: "2023",
    title: "The Role of AI in Personalized Education",
    journal: "AI & Education Conference Proceedings",
    type: "Conference Paper",
  },
];

const AcademicWork = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-16">
        <section className="p-8 md:p-16 lg:p-24 max-w-5xl mx-auto">
          <span className="text-xs tracking-[0.2em] font-body text-muted-foreground mb-4 block">ACADEMIC WORK</span>
          <h1 className="font-serif text-4xl md:text-5xl italic font-light mb-4">
            Research &<br />Publications
          </h1>
          <p className="font-body text-sm font-light text-muted-foreground max-w-lg mb-16">
            A collection of my academic contributions to the field of educational technology and learning sciences.
          </p>

          <div className="relative mb-16">
            <img
              src={gallery3}
              alt="Books"
              className="w-full h-64 object-cover"
              loading="lazy"
              width={640}
              height={800}
            />
          </div>

          <div className="space-y-0">
            {publications.map((pub, i) => (
              <div key={i} className="border-t border-border py-8 grid grid-cols-12 gap-4 items-start group hover:bg-card/50 transition-colors px-4 -mx-4">
                <span className="col-span-2 text-xs font-body text-muted-foreground tracking-wide">{pub.year}</span>
                <div className="col-span-7">
                  <h3 className="font-serif text-lg italic font-light">{pub.title}</h3>
                  <p className="text-xs font-body text-muted-foreground mt-1">{pub.journal}</p>
                </div>
                <span className="col-span-3 text-xs font-body text-muted-foreground tracking-wide text-right">
                  {pub.type}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AcademicWork;
