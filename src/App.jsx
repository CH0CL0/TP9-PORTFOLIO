import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Favoritos from './favoritos';
import { FavoritosProvider } from "../context/favoritoscontext.jsx";
//import contacto from './contacto';
function App() {
  return (
      <BrowserRouter>
      <FavoritosProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos/>} />
        </Routes>
        </FavoritosProvider>
      </BrowserRouter>
  );
}

export default App;