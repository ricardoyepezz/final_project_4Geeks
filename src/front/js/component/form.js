import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Form = () => {
  const { actions } = useContext(Context);

  let flag = false;

  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  console.log(registerForm);
  const history = useHistory();

  const [registerErrors, setRegisterErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newState = { ...registerForm };
    newState[name] = value;
    setRegisterForm(newState);
  };

  const handleValidate = (registerForm) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!registerForm.name) {
      errors.name = "Name is required!";
      flag = true;
    }
    if (!registerForm.email) {
      errors.email = "Email is required!";
      flag = true;
    } else if (!regex.test(registerForm.email)) {
      errors.email = "Email not valid!";
    }
    if (!registerForm.password) {
      errors.password = "Password is required!";
      flag = true;
    }
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setRegisterErrors(handleValidate(registerForm));
    if (flag === false) {
      let formData = new FormData();
      formData.append("name", registerForm.name);
      formData.append("email", registerForm.email);
      formData.append("password", registerForm.password);
      actions.signup(formData, history);
      e.target.reset();
      flag = true;
    } else return false;
  };

  return (
    <>
      <div className="cuerpo main-signup">
        <div className="form-container-signup">
          <h1 className="title-signup">Sign Up</h1>
          <form className="form-signup" onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                id="name"
                name="name"
                placeholder="Name"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <p className="errors-signup">{registerErrors.name}</p>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                id="email"
                name="email"
                placeholder="Email"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <p className="errors-signup">{registerErrors.email}</p>
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
            </div>
            <p className="errors-signup">{registerErrors.password}</p>
            <button
              type="submit"
              className="btn btn-dark d-grid gap-2 col-6 mx-auto"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
