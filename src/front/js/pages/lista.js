import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useEffect } from "react";
import { Home } from "/workspace/final_project_4Geeks/src/front/js/pages/home.js";
import { Menuperfil } from "/workspace/final_project_4Geeks/src/front/js/component/menuperfil.js";
import { Sidebar } from "/workspace/final_project_4Geeks/src/front/js/component/sidebar.js";
import { Datos } from "/workspace/final_project_4Geeks/src/front/js/component/datos.js";
import { MisFavoritos } from "../component/misfavoritos.js";
import { MiLista } from "../component/milista.js";

export const Lista = () => {

  return (
 
      <div className="perfil pt-12">
       <div className="col-2"> <Sidebar /></div>
     <div className="favoritos col-10"> <MiLista/>
      </div>
    </div>
  );
};