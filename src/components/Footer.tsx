import { Link } from "react-router-dom";
import images from "../constants/images";
import icons from "../constants/icons";

export default function Footer() {
  return (
    <footer>
      <div className="container py-4">
        <div className="row gy-4">
          <div className="col-md-3 col-12 col-ms-12 logolas d-flex align-items-center justify-content-center">
            <Link to="/">
              <img src={images.logo2} width={150} alt="Logo Be Fitness" className="img-fluid" />
            </Link>
          </div>
          <div className="col-md-3 col-sm-6 col-12 text-center d-flex align-items-center justify-content-center">
            <ul className="list-unstyled">
              <li>
                <Link className="text-white text-decoration-none fw-bold" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-white text-decoration-none fw-bold" to="/about-us">
                  About us
                </Link>
              </li>
              <li>
                <Link className="text-white text-decoration-none fw-bold" to="/trainers">
                  Services
                </Link>
              </li>
              <li>
                <a className="text-white text-decoration-none fw-bold" href="#">
                  Blogs
                </a>
              </li>
              <li>
                <Link className="text-white text-decoration-none fw-bold" to="/contact">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 col-12 text-center d-flex align-items-center justify-content-center">
            <ul className="list-unstyled">
              <li>
                <a className="text-white text-decoration-none fw-bold" href="#">
                  FAQ
                </a>
              </li>
              <li>
                <a className="text-white text-decoration-none fw-bold" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-white text-decoration-none fw-bold" href="#">
                  Terms of use
                </a>
              </li>
              <li>
                <a className="text-white text-decoration-none fw-bold" href="#">
                  Corporate partners
                </a>
              </li>
              <li>
                <a className="text-white text-decoration-none fw-bold" href="#">
                  sitemap
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-12 d-flex flex-wrap align-items-center justify-content-center gap-2">
            <a href="https://www.twitter.com/explore">
              <img src={icons.logoTwitter} width={50} height={50} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={icons.logoInstagram} width={50} height={50} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/">
              <img src={icons.logoFacebook} width={50} height={50} alt="Facebook" />
            </a>
            <a href="https://www.youtube.com/">
              <img src={icons.logoyoutube} width={50} height={50} alt="Youtube" />
            </a>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-auto mx-auto text-center">
            <p className="text-white mb-3">© Copyright 2020 Restaurante ISTEC</p>
          </div>
        </div>
      </div>
    </footer>
  );
}