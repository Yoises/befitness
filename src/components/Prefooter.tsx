import { useState } from "react";

interface GalleryEntry {
  image: string;
  alt: string;
  title: string;
}

const items: GalleryEntry[] = [
  { image: "/assets/images/b1.jpg", alt: "image", title: "How to gain muscle mass?" },
  { image: "/assets/images/b2.jpg", alt: "image", title: "Working out with only dumbbells" },
  { image: "/assets/images/b3.jpg", alt: "image", title: "Tips to have the best abs" },
  { image: "/assets/images/b4.jpg", alt: "image", title: "Clubs near to your home" },
];

export default function Prefooter() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="container alice text-center">
      <div className="row lice text-center">
        {items.map((item, index) => (
          <div key={item.image} className="wrapper clearfix imgb col-md-4 col-lg-3 col-12 mx-auto">
            <figure
              className="gallery-item"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={item.image} alt={item.alt} />
              <figcaption className="img-title" style={{ display: hoveredIndex === index ? "block" : "none" }}>
                <h5>{item.title}</h5>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}
