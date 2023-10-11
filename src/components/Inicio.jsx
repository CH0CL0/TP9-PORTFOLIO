import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import Navbar from "./Navbar";

const Inicio = () => {
  return (
      <div className="App">
        <Navbar></Navbar>
      <header className="App-header">
        <h1>Eco1</h1>
        <button className="start-button">
          <Link to="/juego">Jugar</Link>
        </button>
      </header>
    </div>
  );
};

export default Inicio;