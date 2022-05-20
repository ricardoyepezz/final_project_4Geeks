import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useEffect } from "react";
import {Home} from "/workspace/final_project_4Geeks/src/front/js/pages/home.js";
import {Menuperfil} from "/workspace/final_project_4Geeks/src/front/js/component/menuperfil.js"
import {Sidebar} from "/workspace/final_project_4Geeks/src/front/js/component/sidebar.js"

export const Favoritos = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
    <div><Sidebar/></div>   
    </>
  );
}