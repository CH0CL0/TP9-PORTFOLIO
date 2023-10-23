import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Choclias from './Choclias';
import Inicio from './components/Inicio';
import Matelolsas from './Matelolsas';
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Choclias" element={<Choclias />} />
          <Route path="/Matelolsas" element={<Matelolsas />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;