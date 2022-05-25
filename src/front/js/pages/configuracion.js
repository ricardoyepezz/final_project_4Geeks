import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useEffect } from "react";
import { Home } from "/workspace/final_project_4Geeks/src/front/js/pages/home.js";
import { Menuperfil } from "/workspace/final_project_4Geeks/src/front/js/component/menuperfil.js";
import { Sidebar } from "/workspace/final_project_4Geeks/src/front/js/component/sidebar.js";
import {Datos} from "../component/datos";
import {Editar} from "../component/edit-boton";

export const Configuracion = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      {" "}
      <div className="perfil pt-12">
        <div className="col-2">
          {" "}
          <Sidebar />
        </div>
        <div className="configuracion col-10">
        <h1 className="text-warning">Configuración</h1>
        <div className="container-fluid">
        <div className="dato-config">
        <div><Datos/><Editar/></div>

      </div>
        </div>
        </div>
      </div>
    </>
  );
};
