import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage2 from "@/assets/hero-2.jpg";

const interests = [
  "Patristics", "Theology", "Political Philosophy", "Church & State",
  "Early Church", "Byzantine History", "Digital Pedagogy", "Comparative Religion"
];

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-16">
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
          <div className="relative">
            <img
              src={heroImage2}
              alt="Dimitrios Porpatonelis"
              className="absolute inset-0 w-full h-full object-cover"
              width={1024}
              height={1280}
            />
          </div>
          <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center">
            <span className="text-xs tracking-[0.2em] font-body text-muted-foreground mb-4">ABOUT ME</span>
            <h1 className="font-serif text-4xl md:text-5xl italic font-light mb-2">
              Dimitrios<br />Porpatonelis
            </h1>
            <p className="text-xs tracking-[0.18em] font-body text-muted-foreground mb-8">
              POST-DOCTORAL RESEARCHER · ARISTOTLE UNIVERSITY OF THESSALONIKI
            </p>
            <div className="space-y-4 font-body text-sm font-light text-muted-foreground leading-relaxed max-w-md">
              <p>
                Theologian and researcher in Patristics and Byzantine History, specializing 
                in the political theology of the Great Fathers of the 4th and 5th centuries. 
                Author of works on John Chrysostom, Cyril of Alexandria, and Gregory the 
                Theologian, with a parallel dedication to developing innovative digital 
                tools for the educational classroom.
              </p>
              <div className="pt-2">
                <p className="text-xs tracking-[0.2em] font-body text-muted-foreground mb-2">TEACHING & RESEARCH</p>
                <p className="font-body text-sm italic">School of Theology, Aristotle University of Thessaloniki</p>
              </div>
              <div className="pt-2">
                <p className="text-xs tracking-[0.2em] font-body text-muted-foreground mb-3">RESEARCH INTERESTS</p>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <span key={interest} className="text-[10px] tracking-[0.12em] uppercase font-body border border-border px-3 py-1">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <p className="font-serif text-3xl italic font-light">302</p>
                <p className="text-xs font-body text-muted-foreground tracking-wide mt-1">Followers</p>
              </div>
              <div>
                <p className="font-serif text-3xl italic font-light">6,979</p>
                <p className="text-xs font-body text-muted-foreground tracking-wide mt-1">Public Views</p>
              </div>
              <div>
                <p className="font-serif text-3xl italic font-light">79</p>
                <p className="text-xs font-body text-muted-foreground tracking-wide mt-1">Following</p>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <a href="https://auth.academia.edu/DimitriosPorpatonelis" target="_blank" rel="noopener noreferrer"
                className="text-xs tracking-[0.2em] font-body hover:opacity-60 transition-opacity underline underline-offset-4">
                ACADEMIA.EDU
              </a>
              <a href="https://www.amazon.com/s?k=Porpatonelis" target="_blank" rel="noopener noreferrer"
                className="text-xs tracking-[0.2em] font-body hover:opacity-60 transition-opacity underline underline-offset-4">
                AMAZON
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
