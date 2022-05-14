import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

export const Form = () => {
  const { store, actions } = useContext(Context);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      actions.signup(data);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successful registration",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
      history.push("/");
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="container text center w-50 mt-5 p-3 border border-dark rounded-3">
      <form className="text-dark" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Name</label>

          <input
            className="form-control"
            type="text"
            placeholder="Name"
            {...register("name", { required: true, maxLength: 25 })}
          />
          {errors.name && (
            <span className="fw-light" style={{ color: "red" }}>
              Name is required
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>

          <input
            className="form-control"
            type="text"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && (
            <span className="fw-light" style={{ color: "red" }}>
              Email is required
            </span>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>

          <input
            className="form-control"
            type="password"
            placeholder="Password"
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors.password && (
            <span className="fw-light" style={{ color: "red" }}>
              Password is required
            </span>
          )}

          {errors.password?.type === "minLength" && (
            <span className="fw-light" style={{ color: "red" }}>
              Min Characters should be 8
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>

          <input
            className="form-control"
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", { required: true, minLength: 8 })}
          />
          {errors.confirmPassword && (
            <span className="fw-light" style={{ color: "red" }}>
              Confirm password is required
            </span>
          )}
          <br></br>
          {errors.confirmPassword?.type === "minLength" && (
            <span className="fw-light" style={{ color: "red" }}>
              Min Characters should be 8
            </span>
          )}
        </div>
        <div className="mb-3 text-center">
          <button type="submit" className="btn btn-dark btn-lg">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
