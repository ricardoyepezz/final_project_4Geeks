import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="up-navbar col-12 d-lg-block">
        <img src="https://img.icons8.com/color/80/000000/m-cute.png" />
        oviez
        <div className="login d-inline-block">
          <ul className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white "
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Ingresar
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </ul>
        </div>
        <div className="login d-inline-block">
          <ul className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white "
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Registrarse
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </ul>
        </div>
      </div>
      {/* second Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Animación
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Comedia
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Drama
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Romance
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Terror
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                🔎
              </button>
            </form>
          </div>
        </div>
      </nav>
      ;
    </>
  );
};
