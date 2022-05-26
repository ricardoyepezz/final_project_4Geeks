import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Sidebar } from "../component/sidebar";

export const Favoritos = () => {
  const { store, actions } = useContext(Context);
  console.log(store.favorites);
  return (
    <div className="perfil pt-12">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="favoritos col-10">
        <span className="badge bg-secondary">{store.favorites.length}</span>

        {store.favorites.map((oneMovie, index) => {
          return (
            <div key={index} className="d-flex text-light">
              {oneMovie.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};
