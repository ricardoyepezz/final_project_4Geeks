import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Sidebar = () => {
  const { store } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className=" col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className=" sidebar d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
            <a
              href="/perfil"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"
            >
              <span className="text-warning fs-5 d-none d-sm-inline">
                Mi Perfil
              </span>
            </a>
            <a
              href="/perfil"
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

        <div className="col py-3 text-warning bg-dark">
          Mis datos
          <table className="table table-sm table-dark">
            <thead>
              <tr>
                <th scope="col">ID de Registro</th>
                <th scope="col">Nombre</th>
                <th scope="col">Correo electrónico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{store.token?.user.id}</th>
                <td>{store.token?.user.name}</td>
                <td>{store.token?.user.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
