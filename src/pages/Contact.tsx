import { Link } from "react-router-dom";
import { useState } from "react";
import type { FormEvent } from "react";
import Prefooter from "../components/Prefooter";
import icons from "../constants/icons";
import images from "../constants/images";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Aqui puedes conectar con un backend/API para enviar el formulario.
    console.log({ name, email, subject, message });
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="container bg-black">
        <div className="row">
          <div className="col-auto mx-auto text-white fw-bold text-center">
            <h1>Contact us</h1>
          </div>
        </div>
        <div className="row">
          <div className="lini col-auto mx-auto d-flex flex-wrap justify-content-center align-items-baseline gap-2 pt-4">
            <Link to="/">
              <img src={images.homelogo} width={30} alt="Logo" />
            </Link>
            <p className="mb-0">
              <Link to="/" className="text-white text-decoration-none">
                Home
              </Link>
            </p>
            <p className="text-white mb-0">&gt;</p>
            <p className="text-white mb-0">Contacts</p>
          </div>
        </div>
        <br />
        <br />
      </div>

      <div className="container text-center py-5">
        <div className="row g-4">
          <div className="yo col-md-6 col-12 bg-white rounded py-4">
            <h2>Questions?</h2>
            <p>we are open to clarify your doubts</p>
            <br />
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
              <div>
                <img src={icons.logoPhone} height={60} alt="Telefono" />
              </div>
              <div>
                <h3 className="mb-0">Call us</h3>
                <p className="mb-0">+351 123 467 891</p>
              </div>
            </div>
            <br />
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
              <div>
                <img src={icons.logoEmail} height={60} alt="Email" />
              </div>
              <div>
                <h3 className="mb-0">Write to us</h3>
                <p className="mb-0">informations@befitness.com</p>
              </div>
            </div>
          </div>

          <div className="yo col-md-6 col-12 bg-light rounded py-4">
            <h2>Let's talk</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-name">
                  name
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="name"
                  aria-label="nome"
                  aria-describedby="addon-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-group flex-nowrap mb-3">
                <span className="input-group-text" id="addon-email">
                  e-email
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="e-mail"
                  aria-label="e-mail"
                  aria-describedby="addon-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  let us know
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Let us know"
                  aria-describedby="inputGroup-sizing-sm"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Send message</span>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="d-grid d-md-block">
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Prefooter />
    </>
  );
}