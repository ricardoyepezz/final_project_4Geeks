import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Sidebar } from "../component/sidebar";

export const Favoritos = () => {
  const { store, actions } = useContext(Context);
  let token = localStorage.getItem("token");
  let favorites = localStorage.getItem("favoritos");
  console.log(favorites);

  return (
    <>
      {!token && <Redirect to="/" />}
      <div className="perfil pt-12">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col mb-3 py-3 text-warning bg-dark">
          <h1>Mis Películas para ver:</h1>
          {favorites}
        </div>
      </div>
    </>
  );
};
