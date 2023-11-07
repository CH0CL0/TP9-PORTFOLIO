import React from 'react';
import './AcercaDe.css';

const AcercaDe = () => {
  return (
    <div className="acerca-de-container">
      <div className="acerca-de-header">
        <h1>Nosotros</h1>
      </div>
      <div className="acerca-de-content">
        <p>
          ¡Hola! Somos Mateo y Alessandro, un equipo apasionado de desarrolladores web y diseñadores UX/UI con un enfoque en crear experiencias digitales cautivadoras y funcionales.
        </p>
        <p>
          Con una sólida formación en tecnologías modernas y diseño centrado en el usuario, nos esforzamos por superar las expectativas de nuestros clientes en cada proyecto. Nos encanta transformar ideas creativas en soluciones tecnológicas innovadoras.
        </p>
      </div>
      <div className="acerca-de-skills">
        <h2>Nuestras Habilidades</h2>
        <ul>
          <li>Desarrollo Web Frontend y Backend</li>
          <li>Diseño de Experiencia de Usuario (UX)</li>
          <li>Diseño de Interfaz de Usuario (UI)</li>
          <li>Desarrollo de Aplicaciones Móviles</li>
          {/* Agrega más habilidades según sea necesario */}
        </ul>
      </div>
    </div>
  );
};

export default AcercaDe;
