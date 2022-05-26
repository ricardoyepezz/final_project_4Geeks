import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory, Redirect } from "react-router-dom";
import "../../styles/home.css";

export const Menuperfil = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory();

  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Mi Perfil
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="/perfil">
            Mis datos
          </a>
          <a className="dropdown-item" href="/favoritos">
            Mis favoritos
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" onClick={() => actions.logout(history)}>
            Logout
          </a>
        </div>
      </div>
    </>
  );
};
