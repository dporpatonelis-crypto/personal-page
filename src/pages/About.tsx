import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage2 from "@/assets/hero-2.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-16">
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
          <div className="relative">
            <img
              src={heroImage2}
              alt="Portrait"
              className="absolute inset-0 w-full h-full object-cover"
              width={1024}
              height={1280}
            />
          </div>
          <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center">
            <span className="text-xs tracking-[0.2em] font-body text-muted-foreground mb-4">ABOUT ME</span>
            <h1 className="font-serif text-4xl md:text-5xl italic font-light mb-8">
              Hello, I'm<br />Your Name
            </h1>
            <div className="space-y-4 font-body text-sm font-light text-muted-foreground leading-relaxed max-w-md">
              <p>
                I am an educator and researcher passionate about leveraging technology 
                to create transformative learning experiences. With a background in 
                educational sciences and digital innovation, I bridge the gap between 
                traditional pedagogy and modern technology.
              </p>
              <p>
                My work spans across curriculum design, educational app development, 
                and academic research focused on student engagement and learning outcomes.
              </p>
              <p>
                When I'm not in the classroom or lab, I enjoy exploring new educational 
                technologies and collaborating with fellow researchers worldwide.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <p className="font-serif text-3xl italic font-light">10+</p>
                <p className="text-xs font-body text-muted-foreground tracking-wide mt-1">Years Experience</p>
              </div>
              <div>
                <p className="font-serif text-3xl italic font-light">25+</p>
                <p className="text-xs font-body text-muted-foreground tracking-wide mt-1">Publications</p>
              </div>
              <div>
                <p className="font-serif text-3xl italic font-light">5</p>
                <p className="text-xs font-body text-muted-foreground tracking-wide mt-1">Apps Created</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
