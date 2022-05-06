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
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand text-white" href="#">
          Inicio
        </a>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Animación
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Comedia
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Drama
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Romance
              </a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link text-white" href="#">
                Terror
              </a>
            </li>
            <div className="buscar">
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  🔎
                </button>
              </form>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};
