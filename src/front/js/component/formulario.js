import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Register = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [rut, setRut] = useState("");
  const history = useHistory();

  const handleClick = () => {
    actions.login(nombre, apellido, rut, email, password);
  };

  if (store.token && store.token != "" && store.token != undefined)
    history.push("/");
  return (
    <div className="text-dark">
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control"
          placeholder="email@example.com"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Apellido</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control"
          placeholder="email@example.com"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Rut</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control"
          placeholder="email@example.com"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control"
          placeholder="email@example.com"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          placeholder="Password"
        />
      </div>
      <button onClick={handleClick} className="btn btn-dark">
        Registrate
      </button>
    </div>
  );
};
