import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { CardDetalle } from "../components/CardDetalle";

export const Detalle = () => {
  let location = useParams();

  const [proyectos, setProyectos] = useState([]);

  const getProyectos = () => {
    fetch("../src/data/proyectos.json")
      .then((response) => response.json())
      .then((data) => setProyectos(data));
  };

  useEffect(() => {
    console.log(location.id);
    getProyectos();
  }, []);

  return (
    <main>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {proyectos
              .filter((proyecto) => proyecto.furl === location.id)
              .map((proyecto) => (
                <CardDetalle proyecto={proyecto} key={proyecto.id} />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};
