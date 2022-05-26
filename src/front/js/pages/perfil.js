import React from "react";
import "../../styles/home.css";
import { Sidebar } from "/workspace/final_project_4Geeks/src/front/js/component/sidebar.js";
import { Datos } from "/workspace/final_project_4Geeks/src/front/js/component/datos.js";
import { Redirect } from "react-router-dom";

export const Perfil = () => {
  let token = localStorage.getItem("token");

  return (
    <>
      {token ? <Redirect to="/perfil" /> : <Redirect to="/login" />}
      <div className="perfil pt-12">
        <div className="col-2">
          {" "}
          <Sidebar />
        </div>
        <div className="misdatos col-10">
          {" "}
          <Datos />
        </div>
      </div>
    </>
  );
};
