import { useState } from "react";
import Prefooter from "../components/Prefooter";
import images from "../constants/images";

interface Club {
  image: string;
  name: string;
}

const clubs: Club[] = [
  { image: images.club1, name: "Club 1" },
  { image: images.club2, name: "Club 2" },
  { image: images.club3, name: "Club 3" },
  { image: images.club4, name: "Club 4" },
  { image: images.club5, name: "Club 5" },
  { image: images.club6, name: "Club 6" },
  { image: images.club7, name: "Club 7" },
  { image: images.club8, name: "Club 8" },
  { image: images.club9, name: "Club 9" },
];

function chunk<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

export default function Clubs() {
  const [hovered, setHovered] = useState<number | null>(null);
  const rows = chunk(clubs, 3);

  return (
    <>
      <br />
      <br />
      <br />
      <br />

      <div className="container-fluid p-0">
        <div className="row g-0">
          <img src={images.EVERYWHERE} alt="Be Fitness Everywhere" className="img-fluid w-100" />
        </div>
      </div>
      <div className="container py-4">
        <div className="row">
          <div className="col-auto mx-auto text-black fw-bold text-center">
            <h1>Know our Clubs</h1>
          </div>
        </div>
      </div>

      {rows.map((row, rowIndex) => (
        <div className="container" key={rowIndex}>
          <div className="row box1 g-4">
            {row.map((club) => {
              const globalIndex = clubs.indexOf(club);
              return (
                <div key={club.image} className="wrapper clearfix col-md-4 col-12 t1 imgbox1">
                  <figure
                    className="gallery-item1 m-0"
                    onMouseEnter={() => setHovered(globalIndex)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <img src={club.image} width={400} height={250} alt={club.name} />
                    <figcaption
                      className="img-title1"
                      style={{ display: hovered === globalIndex ? "flex" : "none" }}
                    >
                      <h5>
                        {club.name} <br /> Sector
                      </h5>
                    </figcaption>
                  </figure>
                </div>
              );
            })}
          </div>
          <br />
        </div>
      ))}

      <Prefooter />
    </>
  );
}