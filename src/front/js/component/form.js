import React from "react";
import { useForm } from "react-hook-form";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form className="text-dark" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="form-label">Name</label>

        <input
          className="form-control"
          type="text"
          placeholder="Name"
          {...register("Name", { required: true, maxLength: 80 })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email address</label>

        <input
          className="form-control"
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Content Preference</label>

        <select
          className="form-control"
          {...register("Content Preference", { required: true })}
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
          {...register("Password", { required: true, min: 5 })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Confirm Password</label>

        <input
          className="form-control"
          type="password"
          placeholder="Confirm Password"
          {...register("Confirm Password", { required: true, min: 2 })}
        />
      </div>
      <div className="mb-3">
        <input type="submit" />
      </div>
    </form>
  );
};
