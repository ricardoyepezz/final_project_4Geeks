import React, { useState, useEffect } from "react";
import "../../styles/home.css";
//import Swal from "sweetalert2";

export const Results = () => {
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get("keyword");

  const [moviesResults, setMoviesResults] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=c7e441d69782b0348dfb84193c8a5371&language=es-ES&query=${keyword}`
    )
      .then((res) => res.json())
      .then((data) => {
        const moviesArr = data.results;
        /* if (moviesArr.length === 0) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Tu búsqueda no tiene resultados!",
          });
        } */

        setMoviesResults(moviesArr);
      })
      .catch((err) => console.error(err));
  });

  return (
    <div className="cuerpo">
      <h2 className="text-light">
        Resultados con la búsqueda: <em>{keyword}</em>
      </h2>
      <div className="row text-center">
        {moviesResults.map((oneMovie, index) => {
          return (
            <div key={index} className="col-3">
              <div key={index} className="card m-4 cardResults">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  className="img-fluid rounded-start"
                  alt="Poster Image"
                />

                <div className="card-body">
                  <h5 className="card-title">{oneMovie.title}</h5>
                  <p className="card-text">
                    {oneMovie.overview.substring(0, 100)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
