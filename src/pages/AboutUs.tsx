import { Link } from "react-router-dom";
import Prefooter from "../components/Prefooter";
import images from "../constants/images";

export default function AboutUs() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />

      <div className="container bg-black">
        <div className="row">
          <div className="col-auto mx-auto text-white fw-bold text-center">
            <h1>About us</h1>
          </div>
        </div>
        <div className="row">
          <div className="lini col-auto mx-auto d-flex flex-wrap justify-content-center align-items-baseline gap-2 py-4">
            <Link to="/">
              <img src={images.homelogo} width={30} alt="Logo" />
            </Link>
            <p className="mb-0">
              <Link to="/" className="text-white text-decoration-none">
                Home
              </Link>
            </p>
            <p className="text-white mb-0">&gt;</p>
            <p className="text-white mb-0">About us</p>
          </div>
          <div className="col-md-12 col-12 logo-showcase text-center bg-white py-4 px-3">
            <img src={images.logo} width={500} height={175} alt="Be Fitness" className="img-fluid" style={{ maxWidth: "500px" }} />
          </div>
        </div>
        <br />
        <br />
      </div>

      <div className="container">
        <div className="row box1">
          <div className="col-md-12 col-12">
            <h2 className="text-center texbox1">Who are we?</h2>
            <p className="text-center">
              BEFITNESS is a new expanding company which goal is to offer a new concept of Gyms, <br />
              providing members with quality spaces where they can train anytime <br />
              and at a fair and affordable price.
            </p>
            <h2 className="text-center texbox1">Mision</h2>
            <p className="text-center">
              In a family environment, to positively change people's health and well-being, <br />
              offering quality at the best price;
            </p>
            <h2 className="text-center texbox1">Vision</h2>
            <p className="text-center">
              We aspire to be a reference brand in the Health and Wellness sector, <br />
              through the provision of a quality service and the commitment, <br />
              dedication and professionalism that characterizes us.
            </p>
          </div>
          <br />
          <br />
          <br />
          <hr />
          <br />
          <div className="col-md-6 col-12 text-center mb-4 mb-md-0">
            <ul>
              <strong>Values:</strong>
              <li>Passion/ Ambition</li>
              <li>Humility/ Integrity;</li>
              <li>team spirit/ loyalty;</li>
              <li>Focus/ Dedication;</li>
              <li>Energy/ Productivity</li>
              <li>Perseverance/ Healty</li>
            </ul>
          </div>
          <div className="col-md-6 col-12 text-center">
            <ul>
              <strong>We came to help you to workout:</strong>
              <li>Helping people achieve their health and fitness goals</li>
              <li>Taking care of customer service</li>
              <li>Make valuable partnerships with the community</li>
              <li>To share our professional experience</li>
              <li>
                reat all our customers and friends ethically, seeking to meet their needs in accordance with our
                Internal Regulations
              </li>
            </ul>
          </div>
        </div>
      </div>

      <br />

      <Prefooter />
    </>
  );
}