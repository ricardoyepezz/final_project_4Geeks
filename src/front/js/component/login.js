import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);

  const history = useHistory();
  let allGood = false;
  const [loginform, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [loginErrors, setLoginErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newState = { ...loginform };
    newState[name] = value;
    setLoginForm(newState);
  };

  const handleValidate = (loginform) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!loginform.email) {
      errors.email = "Email es requerido!";
      allGood = true;
    } else if (!regex.test(loginform.email)) {
      errors.email = "Tu correo no es valido!";
    }
    if (!loginform.password) {
      errors.password = "Password es requerido!";
      allGood = true;
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginErrors(handleValidate(loginform));
    if (allGood === false) {
      let formData = new FormData();
      formData.append("email", loginform.email);
      formData.append("password", loginform.password);
      actions.login(formData, history);
      e.target.reset();
      return (allGood = true);
    } else return false;
  };
  return (
    <>
      <div className="main-login">
        <div className="form-container-login">
          <h1 className="title-login">Login</h1>
          <form className="form-login" onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <p className="errors-login">{loginErrors.email}</p>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <p className="errors-login">{loginErrors.password}</p>
            </div>
            <button
              type="submit"
              className="btn button-login d-grid gap-2 col-6 mx-auto"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

/* const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleClick = () => {
    actions.login(formData, history);
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
 */
