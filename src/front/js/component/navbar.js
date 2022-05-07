import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Login } from "./login";
import { Home } from "../pages/home";
import { Animacion } from "../pages/animacion";
import { Comedia } from "../pages/comedia";
import { Drama } from "../pages/drama";
import { Romance } from "../pages/romance";
import { Terror } from "../pages/terror";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  console.log("this is your token: ", store.token);

  return (
    <>
      <div className="up-navbar col-12 d-lg-block">
        <img className="img"src="https://img.icons8.com/color/80/000000/m-cute.png" />
        oviez
        <div className="login d-inline-block">
          {!store.token ? (
            <a
              className="nav-link text-white "
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Log In
            </a>
          ) : (
            <a
              className="nav-link text-white "
              type="button"
              onClick={() => actions.logout()}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Log Out
            </a>
          )}

          {/* <!-- Modal --> */}
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
      {/* second Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
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
              <button className="btn btn-outline-success" type="submit">
                🔎
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
