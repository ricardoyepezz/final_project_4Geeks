import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword,] = useState("");
  const history = useHistory();

  const handleClick = () => {
    actions.login(email, password);
  };

  if (store.token && store.token != "" && store.token != undefined)
    history.push("/");
  return (
    <div className="text-dark">
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
        Login
      </button>
    </div>
  );
};
