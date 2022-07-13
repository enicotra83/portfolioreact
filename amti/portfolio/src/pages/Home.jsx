import { useEffect, useState } from "react";

import { Hero } from "../components/Hero";
import { Card } from "../components/Card";

export const Home = () => {
  const [proyectos, setProyectos] = useState([]);

  const getProyectos = () => {
    fetch("./src/data/proyectos.json")
      .then((response) => response.json())
      .then((data) => setProyectos(data));
  };

  useEffect(() => {
    getProyectos();
  }, []);

  return (
    <main>
      <Hero />

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {proyectos.map((proyecto) => (
              <Card proyecto={proyecto} key={proyecto.id} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
