import { Link } from "react-router-dom";

export const Card = (props) => {
  const { proyecto } = props;
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <div className="bd-placeholder-img card-img-top">
          <img
            /* src={proyecto.image} */
            src={`../src/assets/img/${proyecto.img}`}
            width="100%"
            height="225"
            alt="Pf 1"
          />
        </div>

        <div className="card-body">
          <h5 className="card-text mb-4">{proyecto.nombre}</h5>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a
                href={proyecto.url}
                className="btn btn-sm btn-outline-secondary"
              >
                Ver proyecto
              </a>
              <Link
                to={`/detalle/${proyecto.furl}`}
                className="btn btn-sm btn-outline-primary"
              >
                Detalle
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
