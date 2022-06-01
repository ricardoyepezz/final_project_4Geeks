import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
  const { actions } = useContext(Context);

  const navigate = useNavigate();
  let flag = false;
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
      flag = true;
    } else if (!regex.test(loginform.email)) {
      errors.email = "Tu correo no es valido!";
    }
    if (!loginform.password) {
      errors.password = "Password es requerido!";
      flag = true;
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginErrors(handleValidate(loginform));
    if (flag === false) {
      let formData = new FormData();
      formData.append("email", loginform.email);
      formData.append("password", loginform.password);
      actions.login(formData, navigate);
      e.target.reset();
      return (flag = true);
    } else return false;
  };
  return (
    <>
      <div className="cuerpo main-signup">
        <div className="form-container-signup">
          <h1 className="title-signup">Log In</h1>
          <form className="form-signup" onSubmit={(e) => handleSubmit(e)}>
            <div>
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
              {" "}
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
              className="btn btn-dark d-grid gap-2 col-6 mx-auto"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
