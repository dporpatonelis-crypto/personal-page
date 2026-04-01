import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroImage1 from "@/assets/hero-1.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, heroImage1];

const GalleryStrip = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-5">
      {images.map((img, i) => (
        <div key={i} className="relative aspect-square overflow-hidden">
          <img
            src={img}
            alt={`Gallery ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            loading="lazy"
            width={640}
            height={640}
          />
        </div>
      ))}
    </section>
  );
};

export default GalleryStrip;
