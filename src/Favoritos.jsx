import React, { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BookmarkFill } from "react-bootstrap-icons";
import { Badge } from "react-bootstrap";
import { FavoritosContext } from "../context/favoritoscontext.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const Favoritos = () => {
  const { favoritos } = useContext(FavoritosContext);
  console.log(favoritos);
  return (
    <div>
      <Navbar />
      <div className="favoritos-container">
        <h1 className="titulo">Proyectos Favoritos</h1>
        <Row>
          {favoritos.map((project, index) => (
            <Col key={index} md={4}>
              <Card className="project-card">
                <Card.Img
                  variant="top"
                  src={project.imageUrl}
                  alt={project.title}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <p>Fecha: {project.date}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Proyecto
                  </a>
                  <BookmarkFill fill="black" className="star-icon favorito" />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <Footer/>
    </div>
  );
};

export default Favoritos;
