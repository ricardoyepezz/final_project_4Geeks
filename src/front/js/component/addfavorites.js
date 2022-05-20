import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useEffect } from "react";
import {Home} from "/workspace/final_project_4Geeks/src/front/js/pages/home.js";
import {Menuperfil} from "/workspace/final_project_4Geeks/src/front/js/component/menuperfil.js"
import {Sidebar} from "/workspace/final_project_4Geeks/src/front/js/component/sidebar.js"

export const addFavorites = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
    <div><Sidebar/></div>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-display="static"
          aria-expanded="false"
        >
          Favorites
          <span className="badge bg-secondary">{store.favorites.length}</span>
        </button>
        <ul className="dropdown-menu dropdown-menu-lg-end">
          {store.favorites.map((item, index) => {
            return (
              <li key={index} className="d-flex">
                <button className="dropdown-item" type="button">
                  {item}
                </button>
                <button
                  className="btn btn-danger m-2"
                  onClick={() => {
                    actions.removeFavorites(index);
                  }}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
