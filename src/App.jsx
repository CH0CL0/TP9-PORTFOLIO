import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Favoritos from './Favoritos';
import { ProjectProvider } from "../context/ProjectContext.jsx";
import AcercaDe from './AcercaDe.jsx';
//import contacto from './contacto';
function App() {
  return (
      <BrowserRouter>
      <ProjectProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos/>} />
          <Route path="/acercaDe" element={<AcercaDe />} />
        </Routes>
        </ProjectProvider>
      </BrowserRouter>
  );
}

export default App;