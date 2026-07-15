import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-12 pt-5 col-ms-12 logolas d-flex align-items-center justify-content-center">
            <Link to="/">
              <img src="/assets/images/logu2.png" width={150} alt="Logo Be Fitness" />
            </Link>
          </div>
          <div className="col-md-3 col-6 p-5 text-center d-flex align-items-center justify-content-center">
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
          <div className="col-md-3 col-6 p-5 text-center d-flex align-items-center justify-content-center">
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
          <div className="col-md-3 col-12 d-flex align-items-center justify-content-center">
            <a href="https://www.twitter.com/explore">
              <img src="/assets/images/logotiwt.png" width={50} height={50} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/">
              <img src="/assets/images/logoinsta.png" width={50} height={50} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/">
              <img src="/assets/images/logoface.png" width={50} height={50} alt="Facebook" />
            </a>
            <a href="https://www.youtube.com/">
              <img src="/assets/images/logoyoutube.png" width={50} height={50} alt="Youtube" />
            </a>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-auto mx-auto">
            <p className="text-white">© Copyright 2020 Restaurante ISTEC</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
