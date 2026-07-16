import Prefooter from "../components/Prefooter";
import images from "../constants/images";

interface TrainerPair {
  left: { image: string; name: string; bio: string };
  right: { image: string; name: string; bio: string };
}

const trainingHabitBio =
  "know the first items to have a training habit, what you should know before starting; the first exercises to start; how to put together your training routine based on your goals; and many other things.";

const servicesBio =
  "Know our serivicios and promotions are adapted to your obejtivos, so you have an excellent experience with us and in the same way you can reach the body you want taking care of your health. The best attention guarantees.";

const pairs: TrainerPair[] = [
  {
    left: { image: images.Antonio, name: "Antonio Smith", bio: trainingHabitBio },
    right: { image: images.Maria, name: "Maria Gonzales", bio: servicesBio },
  },
  {
    left: { image: images.Patrick, name: "Patrick Sheare", bio: trainingHabitBio },
    right: { image: images.Cho, name: "Cho Chang", bio: servicesBio },
  },
  {
    left: { image: images.Tiago, name: "Tiago Palencia", bio: trainingHabitBio },
    right: { image: images.Ester, name: "Ester Nadia", bio: servicesBio },
  },
];

export default function Trainers() {
  return (
    <>
      <div className="container-fluid banner p-0">
        <div className="row g-0">
          <img src={images.portadaCoach} alt="Nuestros entrenadores" className="img-fluid w-100" />
        </div>

        {pairs.map((pair, index) => (
          <div className="container py-4" key={pair.left.name}>
            <div className="row g-4">
              <div className="box1 col-md-5 col-12">
                <div className="col-12 imgbox1 text-center">
                  <img src={pair.left.image} width={400} height={250} alt={pair.left.name} className="w-100" />
                </div>
                <div className="col-12">
                  <br />
                  <h2 className="text-center texbox1">{pair.left.name}</h2>
                  <p className="text-center">{pair.left.bio}</p>
                </div>
              </div>
              <div className="bg-transparent col-auto mx-auto d-none d-md-block"></div>
              <div className="box2 col-md-5 col-12">
                <div className="col-12 imgbox2 text-center">
                  <img src={pair.right.image} width={400} height={250} alt={pair.right.name} className="w-100" />
                </div>
                <div className="col-12">
                  <br />
                  <h2 className="text-center texbox2">{pair.right.name}</h2>
                  <p className="text-center">{pair.right.bio}</p>
                </div>
              </div>
            </div>
            {index < pairs.length - 1 && <hr />}
          </div>
        ))}
      </div>

      <Prefooter />
    </>
  );
}