import React from "react";
import { useForm } from "react-hook-form";

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (data.password === data.confirmPassword) {
      const body = {
        name: data.name,
        email: data.email,
        content: data.content,
        password: data.password,
      };
      const requestOptions = {
        methods: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      };
      fetch(
        "https://3001-ricardoyepe-finalprojec-zcyreismxqe.ws-us44.gitpod.io/api/signup",
        requestOptions
      )
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));

      reset();
    } else {
      alert("Passwords do not match");
    }
  };

  return (
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
        <label className="form-label">Content Preference</label>

        <select
          className="form-control"
          {...register("content", { required: true })}
        >
          <option>Choose</option>
          <option value="Animación">Animación</option>
          <option value="Comedia">Comedia</option>
          <option value="Drama">Drama</option>
          <option value="Romance">Romance</option>
          <option value="Terror">Terror</option>
        </select>
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
        <br></br>
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
      <div className="mb-3">
        <input type="submit" />
      </div>
    </form>
  );
};
