import Prefooter from "../components/Prefooter";

export default function Home() {
  return (
    <>
      <br />

      <div className="container linha">
        <div className="container slider">
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/assets/images/interaccion1.png" className="d-block w-100" alt="Sesion de entrenamiento" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>let's have a session</h5>
                  <p>meet all our personal trainer and enjoy sharing time with us</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="/assets/images/interaccion2.png" className="d-block w-100" alt="Ofertas" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>offers</h5>
                  <p>we have a bunch of offers for you, don't hasite to ask for information</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="/assets/images/interaccion3.png" className="d-block w-100" alt="Vida saludable" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>be healthy</h5>
                  <p>have a healhty body means having a balance in your feeding</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <br />

      <div className="container">
        <div className="row box1">
          <div className="col-md-3 col-12 order-first imgbox1">
            <img src="/assets/images/box1.jpg" width={400} height={250} alt="Iniciar entrenamiento" />
          </div>
          <div className="col-md-9 col-12 order-last">
            <h2 className="text-center texbox1">
              Do you want to start your training but,
              <br />
              you don't know how?
            </h2>
            <p className="text-center">
              know the first items to have a training habit, <br />
              what you should know before starting; the first exercises to start; <br />
              how to put together your training routine based on your goals; and many other things.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row box2">
          <div className="col-md-3 col-12 order-last imgbox2">
            <img src="/assets/images/box2.jpg" width={400} height={250} alt="Servicios" />
          </div>
          <div className="col-md-9 col-12 order-first">
            <h2 className="text-center texbox2">Discover the services we have for you</h2>
            <p className="text-center">
              Know our serivicios and promotions are adapted to your obejtivos,
              <br />
              so you have an excellent experience with us and in the same way you can reach the body you want taking
              care of your health <br /> <br />
              The best attention guarantees.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row box3">
          <div className="col-md-3 col-12 order-first imgbox3">
            <img src="/assets/images/box3.jpg" width={400} height={250} alt="Alimentacion" />
          </div>
          <div className="col-md-9 col-12 order-last">
            <h2 className="text-center texbox3">What foods are necessary for my training?</h2>
            <p className="text-center">
              Depending on the objective in your training, will vary the type of feeding that you should eat, <br />
              always taking into account that a good feeding, will guarantee a better response of our body.
              <br />
              <br /> Find out more about information like these by going to our Blog.
            </p>
          </div>
        </div>
      </div>
      <br />

      <Prefooter />
    </>
  );
}
