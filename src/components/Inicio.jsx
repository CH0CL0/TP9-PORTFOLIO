import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import './Inicio.css';

const Inicio = () => {
  return (
      <div className="App">
        <Navbar></Navbar>
      <header className="App-header">
        <button className="start-button">
          <Link to="/matelolsas">matelolsas</Link>
        </button>
        <button className="start-button">
        <Link to="/choclias">choclias</Link>
        </button>
      </header>
      <Footer></Footer>
    </div>
  );
};

export default Inicio;