import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/home.css";

export const Datos = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams;

  useEffect(() => {
    actions.getUser(id);
  }, []);

  return (
    <div className="col mb-3 py-3 text-warning bg-dark">
      <h1>Mis datos</h1>
      <table className="table table-dark table-striped tabla-config">
        <thead>
          <tr>
            <th scope="col">ID de Registro</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo electrónico</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{store.users?.id}</th>
            <td>{store.users?.name}</td>
            <td>{store.users?.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
