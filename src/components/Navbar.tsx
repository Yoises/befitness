import { Link } from "react-router-dom";
import icons from "../constants/icons";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg container-fluid fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={icons.logo} alt="Be Fitness" width={200} height={70} className="img-fluid" style={{ maxHeight: "70px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="bari collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active altura" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link altura" to="/about-us">
                About us
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle altura"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/trainers">
                    Personal Coach
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/clubs">
                    Clubs
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Workout equipements
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Food counseling
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link altura" href="#">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link altura" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <form className="d-flex mb-3 mb-lg-0" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn" type="submit">
              <img src={icons.search} alt="Search" />
            </button>
          </form>
          <div id="containbtn" className="mb-3 mb-lg-0">
            <button className="buttonli btn"></button>
          </div>
        </div>
      </div>
    </nav>
  );
}