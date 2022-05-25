import React from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

export const Buscador = () => {
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();

    if (keyword.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Necesitas escribir una palabra clave!",
      });
    } else if (keyword.length < 4) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Necesitas escribir más de 4 caracteres!",
      });
    } else {
      e.currentTarget.keyword.value = "";
      history.push(`/results?keyword=${keyword}`);
    }
  };
  return (
    <form className="d-flex" onSubmit={submitHandler}>
      <input
        className="form-control me-2"
        type="text"
        placeholder="Search"
        name="keyword"
      />
      <button className="btn btn-outline-warning" type="submit">
        🔎
      </button>
    </form>
  );
};
