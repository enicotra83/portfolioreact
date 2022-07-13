import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="py-5 text-center container-fluid bg-img">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Mi portfolio</h1>
          <p className="lead text-muted">Bienvenidos a mi porftolio...</p>
          <p>
            <a href="#" className="btn btn-primary my-2">
              Contactame
            </a>{" "}
            <Link to="/detalle/disney" className="btn btn-secondary my-2">
              Mirá mi ultimo trabajo
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
