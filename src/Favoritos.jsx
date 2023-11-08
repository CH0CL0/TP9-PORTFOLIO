import React, { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BookmarkFill, Bookmark } from "react-bootstrap-icons";
import { ProjectContext } from "../context/ProjectContext.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./Choclias.css";

const Favoritos = () => {
  const { projects, setProjects } = useContext(ProjectContext);

  const handleAgregarQuitarFavorito = (project) => {
    const updatedProjects = projects.map((p) => {
      if (p.title === project.title) {
        // Invierte el estado de favorito del proyecto
        p.favorito = !p.favorito;
      }
      return p;
    });

    // Actualiza el estado de proyectos con los favoritos actualizados
    setProjects(updatedProjects);

    // Guarda la lista de proyectos actualizada en el localStorage
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
  };

  return (
    <div>
      <Navbar />
      <Container className="favoritos-container">
        <h1 className="titulo">Proyectos Favoritos</h1>
        <Row>
          {projects
            .filter((project) => project.favorito) // Filtra solo los proyectos marcados como favoritos
            .map((project, index) => (
              <Col key={index} md={4}>
                <Card className="project-card">
                  <Card.Img variant="top" src={project.imageUrl} alt={project.title} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <p>Fecha: {project.date}</p>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      Ver Proyecto
                    </a>
                    {project.favorito ? (
                      <BookmarkFill
                        fill="black"
                        className="star-icon favorito"
                        onClick={() => handleAgregarQuitarFavorito(project)}
                      />
                    ) : (
                      <Bookmark
                        className="star-icon"
                        onClick={() => handleAgregarQuitarFavorito(project)}
                      />
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Favoritos;