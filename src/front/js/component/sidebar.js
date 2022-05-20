import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useEffect } from "react";
import { Form } from "../component/form";
import { Home } from "/workspace/final_project_4Geeks/src/front/js/pages/home.js";
import { Perfil } from "/workspace/final_project_4Geeks/src/front/js/pages/perfil.js";
import { Menuperfil } from "/workspace/final_project_4Geeks/src/front/js/component/menuperfil.js";

export const Sidebar = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className=" col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className=" sidebar d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
            <a
              href="/perfil"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"
            >
              <span className="text-warning fs-5 d-none d-sm-inline">Mi Perfil</span>
            </a>
            <a
              href="/favoritos"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Favoritos</span>
            </a>
            <a
              href="/perfil"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Mi Lista</span>
            </a>
            <a
              href="/perfil"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Configuración</span>
            </a>
          </div>
          
        </div>
        
        <div className="col py-3 text-warning bg-dark">Mis datos
        <table class="table table-sm table-dark">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">NickName</th>
      <th scope="col">Nombre</th>
      <th scope="col">Correo electrónico</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Chilenitox</td>
      <td>Juan Pérez</td>
      <td>hola@gmail.com</td>
    </tr>
  </tbody>
</table></div>
      </div>
    </div>
  );
};
