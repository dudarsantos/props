import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Clientes from './pages/Clientes';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clients" element={<Clientes />} />
    </Routes>
    </BrowserRouter>
  );
}

export default Routes;
