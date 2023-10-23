import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css"; // Importa tu archivo de estilos para el footer

const Footer = () => {
  return (
    <footer className="Footer">
      <Container>
      <Row>
          <Col md={6}>
            <h5>Contacto</h5>
            <p>Dirección: 123 Calle Principal, Ciudad, País</p>
            <p>Email: info@example.com</p>
            <p>Teléfono: +123 456 7890</p>
          </Col>
          <Col md={6}>
            <h5>Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/productos">Productos</a>
              </li>
              <li>
                <a href="/contacto">Contacto</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3">
        &copy; {new Date().getFullYear()} Tu Nombre o Nombre de tu Empresa
      </div>
    </footer>
  );
};

export default Footer;
