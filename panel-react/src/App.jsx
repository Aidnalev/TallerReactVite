// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Clientes from './pages/Clientes';
import Proveedor from './pages/Proveedor';
import Usuarios from './pages/Usuarios';
import Logout from './pages/Logout';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/proveedor" element={<Proveedor />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
