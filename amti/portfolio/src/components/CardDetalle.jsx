import { Link } from "react-router-dom";

export const CardDetalle = (props) => {
  const { proyecto } = props;
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <div className="bd-placeholder-img card-img-top">
          <img
            src={`../src/assets/img/${proyecto.img}`}
            width="100%"
            height="525"
            alt={proyecto.nombre}
          />
        </div>

        <div className="card-body">
          <h5 className="card-text mb-4">{proyecto.nombre}</h5>
          <p className="card-text mb-4">{proyecto.descripcion}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a href={proyecto.url} className="btn btn-secondary">
                Ver proyecto
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
