import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const resources = [
  { title: "Course Materials", description: "Lecture slides, reading lists, and supplementary resources for all courses.", icon: "📚" },
  { title: "Assignments", description: "Current assignments, deadlines, and submission guidelines.", icon: "📝" },
  { title: "Office Hours", description: "Schedule a meeting or join virtual office hours for academic support.", icon: "🕐" },
  { title: "Discussion Forum", description: "Engage with peers and ask questions about course content.", icon: "💬" },
  { title: "Grades & Feedback", description: "View your grades and detailed feedback on submitted work.", icon: "📊" },
  { title: "Research Opportunities", description: "Open positions for research assistants and collaborative projects.", icon: "🔬" },
];

const StudentPortal = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-16">
        <section className="p-8 md:p-16 lg:p-24 max-w-5xl mx-auto">
          <span className="text-xs tracking-[0.2em] font-body text-muted-foreground mb-4 block">STUDENT PORTAL</span>
          <h1 className="font-serif text-4xl md:text-5xl italic font-light mb-4">
            Student<br />Resources
          </h1>
          <p className="font-body text-sm font-light text-muted-foreground max-w-lg mb-16">
            Access all course materials, assignments, and academic resources in one place.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {resources.map((resource, i) => (
              <div key={i} className="bg-background p-8 group hover:bg-card transition-colors cursor-pointer">
                <span className="text-3xl mb-4 block">{resource.icon}</span>
                <h3 className="font-serif text-xl italic font-light mb-2">{resource.title}</h3>
                <p className="font-body text-xs font-light text-muted-foreground leading-relaxed mb-4">
                  {resource.description}
                </p>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-border pt-8">
            <h2 className="font-serif text-2xl italic font-light mb-4">Announcements</h2>
            <div className="space-y-4">
              <div className="border-b border-border pb-4">
                <p className="text-xs font-body text-muted-foreground tracking-wide mb-1">APRIL 1, 2026</p>
                <p className="font-body text-sm font-light">Final exam schedule has been posted. Please check your course pages for details.</p>
              </div>
              <div className="border-b border-border pb-4">
                <p className="text-xs font-body text-muted-foreground tracking-wide mb-1">MARCH 25, 2026</p>
                <p className="font-body text-sm font-light">New research assistant positions available for Summer 2026. Apply by April 15.</p>
              </div>
              <div className="border-b border-border pb-4">
                <p className="text-xs font-body text-muted-foreground tracking-wide mb-1">MARCH 20, 2026</p>
                <p className="font-body text-sm font-light">Workshop on academic writing: Register now for the April 10 session.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default StudentPortal;
