import Prefooter from "../components/Prefooter";

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
    left: { image: "/assets/images/Antonio.png", name: "Antonio Smith", bio: trainingHabitBio },
    right: { image: "/assets/images/Maria.jpg", name: "Maria Gonzales", bio: servicesBio },
  },
  {
    left: { image: "/assets/images/Patrick.jpg", name: "Patrick Sheare", bio: trainingHabitBio },
    right: { image: "/assets/images/cho.jpg", name: "Cho Chang", bio: servicesBio },
  },
  {
    left: { image: "/assets/images/Tiago.jpg", name: "Tiago Palencia", bio: trainingHabitBio },
    right: { image: "/assets/images/ester.jpg", name: "Ester Nadia", bio: servicesBio },
  },
];

export default function Trainers() {
  return (
    <>
      <div className="container banner">
        <div className="row">
          <img src="/assets/images/portada-coach.png" alt="Nuestros entrenadores" />
        </div>

        {pairs.map((pair, index) => (
          <div className="container" key={pair.left.name}>
            <div className="row">
              <div className="box1 col-md-5 col-12">
                <div className="col-md-12 col-6 imgbox1 text-center">
                  <img src={pair.left.image} width={400} height={250} alt={pair.left.name} />
                </div>
                <div className="col-md-12 col-12">
                  <br />
                  <h2 className="text-center texbox1">{pair.left.name}</h2>
                  <p className="text-center">{pair.left.bio}</p>
                </div>
              </div>
              <div className="bg-transparent col-auto mx-auto"></div>
              <div className="box2 col-md-5 col-12">
                <div className="col-md-12 col-6 imgbox2 text-center">
                  <img src={pair.right.image} width={400} height={250} alt={pair.right.name} />
                </div>
                <div className="col-md-12 col-12">
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
