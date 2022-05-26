import React from "react";
import "../../styles/home.css";
import { Redirect } from "react-router-dom";

export const Sidebar = () => {
  let token = localStorage.getItem("token");

  return (
    <>
      {!token && <Redirect to="/" />}
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
              {/* <a
                href="/favoritos"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"
              >
                <span className="text-warning fs-5 d-none d-sm-inline">
                  Favoritos
                </span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
