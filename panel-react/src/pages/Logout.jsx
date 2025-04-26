// src/pages/Logout.jsx
import React from 'react';

const Logout = () => {
  return (
    <div className="container">
      <h2 className="mt-4">Logout</h2>
      <p>En esta sección podrás cerrar tu sesión.</p>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Cerrar Sesión</h5>
          <p className="card-text">Haz clic aquí para cerrar sesión y salir del panel administrativo.</p>
        </div>
      </div>
    </div>
  );
};

export default Logout;
