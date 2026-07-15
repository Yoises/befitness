import { useState } from "react";
import Prefooter from "../components/Prefooter";

interface Club {
  image: string;
  name: string;
}

const clubs: Club[] = [
  { image: "/assets/images/gym1.jpg", name: "Club 1" },
  { image: "/assets/images/gym2.jpg", name: "Club 2" },
  { image: "/assets/images/gym3.png", name: "Club 3" },
  { image: "/assets/images/gym4.jpg", name: "Club 4" },
  { image: "/assets/images/gym5.jpg", name: "Club 5" },
  { image: "/assets/images/gym6.jpg", name: "Club 6" },
  { image: "/assets/images/gym7.png", name: "Club 7" },
  { image: "/assets/images/gym8.jpg", name: "Club 8" },
  { image: "/assets/images/gym9.jpg", name: "Club 9" },
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

      <div className="container">
        <div className="row">
          <img src="/assets/images/EVERYWHERE.png" alt="Be Fitness Everywhere" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-auto mx-auto text-black fw-bold text-xl-center">
            <h1>Know our Clubs</h1>
          </div>
        </div>
      </div>

      {rows.map((row, rowIndex) => (
        <div className="container" key={rowIndex}>
          <div className="row box1">
            {row.map((club) => {
              const globalIndex = clubs.indexOf(club);
              return (
                <div key={club.image} className="wrapper clearfix col-md-4 col-12 t1 imgbox1">
                  <figure
                    className="gallery-item1"
                    onMouseEnter={() => setHovered(globalIndex)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <img src={club.image} width={400} height={250} alt={club.name} />
                    <figcaption
                      className="img-title1"
                      style={{ display: hovered === globalIndex ? "block" : "none" }}
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
