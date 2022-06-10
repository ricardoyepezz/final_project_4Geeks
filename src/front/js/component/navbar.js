import React from "react";
import { Menuperfil } from "../component/menuperfil";
import Movlogo from "../../img/Movlogo.png";
import { Favoritos } from "../pages/favoritos";
import { Buscador } from "../component/Buscador";

export const Navbar = () => {
  let token = localStorage.getItem("token");

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light border-bottom border-warning">
        <div className="container-fluid">
          <a className="navbar-brand m-1" href="/">
            <img src={Movlogo} alt="..." height="70" />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Validar si hay token para mostrar botón home */}
              {token ? (
                <li className="nav-item">
                  <a className="nav-link text-light" href="/user">
                    Home
                  </a>
                </li>
              ) : (
                ""
              )}{" "}
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
              {/* Validar si hay token para mostrar botón Favs */}
              {token ? (
                <li className="nav-item">
                  <Favoritos />
                </li>
              ) : (
                ""
              )}
            </ul>
            {/* Validar si hay token para mostrar botón Sign-Up */}

            {token ? (
              ""
            ) : (
              <div className="p-2 bd-highlight">
                <Buscador className="nav-link d-flex justify-content-end" />
                <a
                  className="nav-link text-white d-flex justify-content-end"
                  type="button"
                  href="/signup"
                >
                  Sign-Up
                </a>
              </div>
            )}
            {token ? (
              <Menuperfil />
            ) : (
              <div className="p-2 bd-highlight">
                <a className="nav-link text-white" type="button" href="/login">
                  Log In
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
