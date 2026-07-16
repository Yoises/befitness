import { useState } from "react";
import images from "../constants/images";

interface GalleryEntry {
  image: string;
  alt: string;
  title: string;
}

const items: GalleryEntry[] = [
  { image: images.b1, alt: "image", title: "How to gain muscle mass?" },
  { image: images.b2, alt: "image", title: "Working out with only dumbbells" },
  { image: images.b3, alt: "image", title: "Tips to have the best abs" },
  { image: images.b4, alt: "image", title: "Clubs near to your home" },
];

export default function Prefooter() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="container alice text-center py-4">
      <div className="row lice text-center g-4">
        {items.map((item, index) => (
          <div key={item.image} className="wrapper clearfix col-md-4 col-lg-3 col-12 mx-auto">
            <figure
              className="gallery-item m-0"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={item.image} alt={item.alt} />
              <figcaption className="img-title" style={{ display: hoveredIndex === index ? "flex" : "none" }}>
                <h5>{item.title}</h5>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}