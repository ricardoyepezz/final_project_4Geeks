import React from "react";
import "../../styles/home.css";

export const Datos = () => {
  let token = JSON.parse(localStorage.getItem("token"));
  let name = token.user.name;
  let email = token.user.email;
  let id = token.user.id;

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
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
