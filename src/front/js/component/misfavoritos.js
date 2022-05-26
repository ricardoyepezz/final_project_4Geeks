import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const MisFavoritos = () => {
  const { store, actions } = useContext(Context);
  console.log(store.favorites);

  return (
    <>
      {" "}
      <div className="favoritos container">
        <div className="row">
          <h1 className="mb-3 text-warning">Mis Favoritos </h1>

          {store.favorites?.map((item, index) => {
            return (
              <>
                <li key={index} className="d-flex text-light">
                  {item}

                  {/* <button
                    className="btn btn-danger m-2"
                    onClick={() => {
                      actions.removeFavorites(index);
                    }}
                  >
                    X
                  </button> */}
                </li>
              </>
            );
          })}

          <p className="text-light">hola</p>
        </div>
      </div>
    </>
  );
};
