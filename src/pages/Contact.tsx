import { Link } from "react-router-dom";
import { useState } from "react";
import type { FormEvent } from "react";
import Prefooter from "../components/Prefooter";

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
          <div className="lini col-auto mx-auto d-flex align-items-baseline pt-4">
            <Link to="/">
              <img src="/assets/images/homelogo.png" width={30} alt="Logo" />
            </Link>
            <p> </p>
            <p>
              <Link to="/" className="text-white text-decoration-none">
                Home
              </Link>
            </p>
            <br />
            <p className="text-white">&gt;</p>
            <br />
            <p className="text-white">Contacts</p>
          </div>
        </div>
        <br />
        <br />
      </div>

      <div className="container text-center py-5">
        <div className="row">
          <div className="yo col-md-6 col-12 bg-white">
            <br />
            <h2>Questions?</h2>
            <p>we are open to clarify your doubts</p>
            <br />
            <div className="d-flex justify-content-center">
              <div className="order-first">
                <img src="/assets/images/logophone.png" height={60} alt="Telefono" />
              </div>
              <div className="order-last">
                <h3>Call us</h3>
                <p>+351 123 467 891</p>
              </div>
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <div className="order-first">
                <img src="/assets/images/logoemail.png" height={60} alt="Email" />
              </div>
              <div className="order-last">
                <h3>Write to us</h3>
                <p>informations@befitness.com</p>
              </div>
            </div>
          </div>

          <div className="yo col-md-6 col-12 bg-light">
            <br />
            <h2>Let's talk</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group flex-nowrap">
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
              <div className="input-group flex-nowrap">
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
              <div className="input-group">
                <span className="input-group-text">Send message</span>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <br />
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      <Prefooter />
    </>
  );
}
