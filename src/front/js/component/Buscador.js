import React from "react";
import Swal from "sweetalert2";
import "../../styles/searchBar.css";
import { useHistory } from "react-router-dom";

function Buscador() {
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
    <div className="SearchBody">
      <div className="CompleteBar">
        <form className="BAR" onSubmit={submitHandler}>
          <input
            className="searchingbar"
            type="text"
            placeholder="Busca una película"
            name="keyword"
          />
          <button className="search-button" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Buscador;
