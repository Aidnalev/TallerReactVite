import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
      <div className="container-fluid">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/logo.png"
            alt="Logo"
            width="50"
            height="50"
            className="me-3"
            style={{ objectFit: "contain" }}
          />
          <span>Panel Web</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/clientes">Clientes</NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/proveedor">Proveedor</NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/usuarios">Usuarios</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-danger" to="/logout">Logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
