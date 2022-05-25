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
      <th scope="col">#id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Correo Electrónico</th>
      <th scope="col">Ciudad</th>
      <th scope="col">País</th>
      <th scope="col">Website</th>
      <th scope="col">Twitter</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
  );
};
