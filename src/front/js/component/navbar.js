import React from "react";
import { Menuperfil } from "/workspace/final_project_4Geeks/src/front/js/component/menuperfil.js";
import Movlogo from "../../img/Movlogo.png";
import { Buscador } from "./Buscador";

export const Navbar = () => {
  let token = localStorage.getItem("token");

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light border-bottom border-warning">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Movlogo} alt="..." height="70" />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-light" aria-current="home" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/animacion">
                  Animación
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-light" href="/comedia">
                  Comedia
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/drama">
                  Drama
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/Romance">
                  Romance
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/Terror">
                  Terror
                </a>
              </li>
            </ul>
            <Buscador />
            {!token ? (
              <div className="p-2 bd-highlight">
                <a
                  className="nav-link text-white d-flex justify-content-end"
                  type="button"
                  href="/signup"
                >
                  Sign-Up
                </a>
              </div>
            ) : (
              ""
            )}
            {!token ? (
              <div className="p-2 bd-highlight">
                <a className="nav-link text-white" type="button" href="/login">
                  Log In
                </a>
              </div>
            ) : (
              <Menuperfil />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
