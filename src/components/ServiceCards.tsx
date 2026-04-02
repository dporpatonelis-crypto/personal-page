import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const ServiceCards = () => {
  const { tr } = useLanguage();

  const services = [
    { title: tr("service.about.title"), path: "/about", subtitle: tr("service.about.sub") },
    { title: tr("service.academic.title"), path: "/academic-work", subtitle: tr("service.academic.sub") },
    { title: tr("service.apps.title"), path: "/educational-apps", subtitle: tr("service.apps.sub") },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 border-b border-border">
      {services.map((service, i) => (
        <Link
          key={i}
          to={service.path}
          className="group p-8 md:p-12 text-center border-r border-border last:border-r-0 hover:bg-card transition-colors"
        >
          <h3 className="font-serif text-2xl italic font-light">{service.title}</h3>
          <p className="text-xs font-body text-muted-foreground mt-2 tracking-wide">{service.subtitle}</p>
          <ArrowRight className="mx-auto mt-4 w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
        </Link>
      ))}
    </section>
  );
};

export default ServiceCards;
