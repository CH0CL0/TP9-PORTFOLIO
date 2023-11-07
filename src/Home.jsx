import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Bookmark } from "react-bootstrap-icons";
import { BookmarkFill } from "react-bootstrap-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons"; // Importa los iconos que necesitas
import "./Choclias.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FavoritosContext } from '../context/favoritoscontext.jsx';
import LoginForm from "./components/Login.jsx";

const Choclias = () => {
  const { favoritos, setFavoritos } = React.useContext(FavoritosContext)
  const proyectosIniciales = [
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
  const [projects, setProjects] = useState(proyectosIniciales);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    setUser(email);
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const handleAgregarFavorito = (project) => {
    // Asegúrate de que el usuario esté autenticado antes de agregar a favoritos
    if (user) {
      setFavoritos([...favoritos, project]);
    } else {
      alert('Debes iniciar sesión para agregar a favoritos.');
    }
  };




  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const isFavorito = (project) => {
    console.log(favoritos)
    return favoritos.includes(project);
  };
  return (
    <div>
      <Navbar />
      <Container className="choclias-container">
        <h1 className="titulo">Mis Proyectos</h1>
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
                  {isFavorito(project) ? (
                    <BookmarkFill
                      fill="black" // Puedes ajustar el color de relleno
                      className="star-icon favorito"
                      onClick={() => handleAgregarFavorito(project)}
                    />
                  ) : (
                    <Bookmark
                      className="star-icon"
                      onClick={() => handleAgregarFavorito(project)}
                    />
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="inicio-sesion">
        {user ? (
          <p className="welcome-message">Hola, {user} | <button className="logout-button" onClick={() => setUser(null)}>Cerrar Sesión</button></p>
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Choclias;
