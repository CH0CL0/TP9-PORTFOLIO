import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; // Importa los iconos que necesitas
import "./Choclias.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const Choclias = () => { 
  const projects = [
    {
      title: "Proyecto 1",
      description: "NASHEI",
      imageUrl: "https://www.yorokobu.es/src/uploads/2012/03/www.myownbike.jpeg",
      date: "30/02/1997",
      url: "https://www.google.com/?hl=es&safe=active&ssui=on",
    },
    {
        title: "Proyecto 2",
        description: "NASHEI",
        imageUrl: "https://marketing4ecommerce.net/wp-content/uploads/2023/01/Screenshot_2-1-1024x573.png",
        date: "30/02/1997",
        url: "https://www.google.com/?hl=es&safe=active&ssui=on",
      },
      {
        title: "Proyecto 3",
        description: "NASHEI",
        imageUrl: "https://tusclicks.com/blog/wp-content/uploads/2019/10/hero-design-web.jpg",
        date: "30/02/1997",
        url: "https://www.google.com/?hl=es&safe=active&ssui=on",
      },
      {
        title: "Proyecto 4",
        description: "NASHEI",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk39xK56uiRJKkNYBSLPCVi2O1VeOsJsBFYA&usqp=CAU",
        date: "30/02/1997",
        url: "https://www.google.com/?hl=es&safe=active&ssui=on",
      },

    // Agrega más proyectos según sea necesario
  ];
  const [favoritos, setFavoritos] = useState([]);
  const handleAgregarFavorito = (project) => {
    if (favoritos.includes(project)) {
      // Si el proyecto ya está en favoritos, lo eliminamos
      setFavoritos(favoritos.filter((item) => item !== project));
    } else {
      // Si no está en favoritos, lo añadimos
      setFavoritos([...favoritos, project]);
    }
  };

  const isFavorito = (project) => {
    return favoritos.includes(project);
  };

  return (
    <div>
      <Navbar />
      <Container className="choclias-container">
        <h1>Mis Proyectos</h1>
        <Row>
          {projects.map((project, index) => (
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
                  <FontAwesomeIcon
                    icon={faStar}
                    className={`star-icon ${isFavorito(project) ? "favorito" : ""}`}
                    onClick={() => handleAgregarFavorito(project)}
                  />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="favoritos-container">
      <h2>Proyectos Favoritos</h2>
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
                <FontAwesomeIcon
                  icon={faStar}
                  className={`star-icon ${isFavorito(project) ? "favorito" : ""}`}
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

export default Choclias;
