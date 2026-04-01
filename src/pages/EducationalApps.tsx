import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import serviceImage from "@/assets/service-image.jpg";

const apps = [
  {
    title: "LearnFlow",
    description: "An adaptive learning platform that personalizes content delivery based on student performance and learning patterns.",
    tags: ["Adaptive Learning", "AI", "K-12"],
    image: gallery2,
  },
  {
    title: "QuizMaster Pro",
    description: "Interactive quiz and assessment tool with real-time analytics for educators to track student progress.",
    tags: ["Assessment", "Analytics", "Higher Ed"],
    image: gallery4,
  },
  {
    title: "StudyHub",
    description: "Collaborative study environment enabling group learning, resource sharing, and peer-to-peer tutoring.",
    tags: ["Collaboration", "Social Learning", "Mobile"],
    image: serviceImage,
  },
];

const EducationalApps = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-16">
        <section className="p-8 md:p-16 lg:p-24 max-w-6xl mx-auto">
          <span className="text-xs tracking-[0.2em] font-body text-muted-foreground mb-4 block">EDUCATIONAL APPS</span>
          <h1 className="font-serif text-4xl md:text-5xl italic font-light mb-4">
            Digital Learning<br />Tools
          </h1>
          <p className="font-body text-sm font-light text-muted-foreground max-w-lg mb-16">
            Designing and developing educational applications that enhance the learning experience.
          </p>

          <div className="space-y-16">
            {apps.map((app, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border pt-8">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={640}
                    height={480}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-serif text-2xl md:text-3xl italic font-light mb-4">{app.title}</h3>
                  <p className="font-body text-sm font-light text-muted-foreground leading-relaxed mb-6">
                    {app.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {app.tags.map((tag) => (
                      <span key={tag} className="text-xs font-body tracking-wide border border-border px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="inline-flex items-center gap-2 text-xs font-body tracking-[0.2em] hover:opacity-60 transition-opacity">
                    VIEW PROJECT <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default EducationalApps;
