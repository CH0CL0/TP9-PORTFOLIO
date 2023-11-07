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
            <p>Mail: choclo123@gmail.com</p>
            <p>Teléfono: +123 456 7890</p>
          </Col>
          <Col md={6}>
            <h5>Nuestras redes</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.instagram.com/">IG DE LA MINITA</a>
              </li>
              <li>
                <a href="https://www.facebook.com/">CARA DEL LIBRO</a>
              </li>
              <li>
                <a href="https://www.twitter.com/">Twitter de la minita</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3">
        &copy; {new Date().getFullYear()} Alessandro Arena y Mateo Guevara
      </div>
    </footer>
  );
};

export default Footer;
