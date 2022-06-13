import React from "react";
import { Menuperfil } from "../component/menuperfil";
import Movlogo from "../../img/Movlogo.png";
import { Banner } from "../component/Banner";

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
              )}

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
            {/* Validar si hay token para mostrar botón Sign-Up */}

            {token ? (
              <div className="d-flex flex-row bd-highlight me-4">
                <Banner className="bd-highlight" />
                <Menuperfil className="bd-highlight" />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
