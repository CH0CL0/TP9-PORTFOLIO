import React, { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BookmarkFill, Bookmark } from "react-bootstrap-icons";
import { FavoritosContext } from "../context/favoritoscontext.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./Choclias.css";

const Favoritos = () => {
  const { favoritos, setFavoritos } = useContext(FavoritosContext);

  const handleAgregarFavorito = (project) => {
    const updatedFavoritos = favoritos.filter((item) => item !== project);
    setFavoritos(updatedFavoritos);

    // Guardar la lista de favoritos actualizada en el localStorage
    localStorage.setItem("favoritos", JSON.stringify(updatedFavoritos));
  };

  return (
    <div>
      <Navbar />
      <Container className="favoritos-container">
        <h1 className="titulo">Proyectos Favoritos</h1>
        <Row>
          {favoritos.map((project, index) => (
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
                  <BookmarkFill
                    fill="black"
                    className="star-icon favorito"
                    onClick={() => handleAgregarFavorito(project)}
                  />
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
