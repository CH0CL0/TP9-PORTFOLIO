import React from 'react';
import { Badge } from "@mui/material";
import './Inicio.css';
import { ProjectContext } from "../../context/ProjectContext.jsx";

const Navbar = () => {
  const { projects } = React.useContext(ProjectContext);
  const favoritos = projects.filter((project) => project.favorito);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Mi Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/AcercaDe">Acerca de</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacto">Contacto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/favoritos">
                Favoritos{" "}
                {favoritos.length > 0 && <Badge badgeContent={favoritos.length} color="primary" />}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
