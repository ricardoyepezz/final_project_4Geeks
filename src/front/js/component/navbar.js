import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Login } from "./login";
import { Menuperfil } from "/workspace/final_project_4Geeks/src/front/js/component/menuperfil.js";
import Movlogo from "../../img/Movlogo.png";
export const Navbar = () => {
  const { store } = useContext(Context);

  return (
    <>
      
      <nav className="navbar fixed-top navbar-expand-lg navbar-light border-bottom border-warning">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
      <img src={Movlogo} alt="..." height="70"/>
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
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-warning" type="submit">
                🔎
              </button>
            </form>

          {/*  ---------------sign up ----------------- */}
          <div className="p-2 bd-highlight">
              <a
                className="nav-link text-white d-flex justify-content-end"
                type="button"
                href="/signup"
              >
                Sign-Up
              </a>
            </div>

{/*  ---------------login logout button ----------------- */}

            <div className="p-2 bd-highlight">
              {!store.accepted && !store.token ? (
                <a
                  className="nav-link text-white  "
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Log In
                </a>
              ) : (
                <Menuperfil />
              )}
            </div>
             {/* <!------------------- Modal Log In-------------------> */}
             <div
            className="modal fade"
            id="exampleModal"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title text-dark" id="exampleModalLabel">
                    Login
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-dark">
                  {store.token &&
                  store.token != "" &&
                  store.token != undefined ? (
                    "Successful Log In"
                  ) : (
                    <Login />
                  )}
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </nav>
    </>
  );
};
