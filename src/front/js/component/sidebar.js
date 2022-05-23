import React from "react";
import "../../styles/home.css";

export const Sidebar = () => {
  return (
    <div className="sidebar container-fluid">
      <div className=" flex-nowrap">
        <div className=" col-auto px-sm-2 px-0">
          <div className="sidebar d-flex flex-column px-3 pt-2 min-vh-100">
            <a
              href="/perfil"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"
            >
              <span className="text-warning fs-5 d-none d-sm-inline">
                Mi Perfil
              </span>
            </a>
            <a
              href="/favoritos"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"
            >
              <span className="text-warning fs-5 d-none d-sm-inline">
                Favoritos
              </span>
            </a>
            <a
              href="/milista"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"
            >
              <span className="text-warning fs-5 d-none d-sm-inline">
                Mi Lista
              </span>
            </a>
            <a
              href="/perfil"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"
            >
              <span className="text-warning fs-5 d-none d-sm-inline">
                Configuración
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
