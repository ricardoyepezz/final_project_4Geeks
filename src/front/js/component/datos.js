import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Datos = () => {
  const { store } = useContext(Context);
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
            <th scope="row">{store.token?.user.id}</th>
            <td>{store.token?.user.name}</td>
            <td>{store.token?.user.email}</td>
          </tr>
        </tbody>
      </table>
      <a href="https://3000-ricardoyepe-finalprojec-m0rqhmygarb.ws-us46.gitpod.io/editar">
        Editar
      </a>
    </div>
  );
};
