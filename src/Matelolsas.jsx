import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Matelolsas.css"; // Importa tu archivo CSS personalizado
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Matelolsas = () => {
  const products = [
    {
      name: "Bolsa de Tela",
      description: "Bolsa ecológica de tela resistente, ideal para compras.",
    },
    {
      name: "Bolsa de Papel",
      description: "Bolsa de papel reciclado con asas resistentes.",
    },
    // Agrega más productos según sea necesario
  ];

  return (
    <div>
        <Navbar></Navbar>
<Container className="matelolsas-container">
      <h1>Nuestros Productos</h1>
      <Row>
        {products.map((product, index) => (
          <Col key={index} md={4}>
            <Card className="product-card">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <Footer></Footer>
    </div>
  );
};

export default Matelolsas;
