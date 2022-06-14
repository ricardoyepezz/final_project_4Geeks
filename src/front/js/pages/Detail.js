import React from "react";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  let token = localStorage.getItem("token");
  let data = JSON.parse(localStorage.getItem("token"));
  let userId = data.user.id;
  let movieTitle = store.titleDetail.title;
  let movieId = store.titleDetail.id;
  console.log(movieId);

  useEffect(() => {
    actions.getTitleDetail(id);
  }, []);
  return (
    <div className="cuerpo">
      <div className="row">
        <div className="col-4">
          <img
            src={`https://image.tmdb.org/t/p/w500/${store.titleDetail.poster_path}`}
            alt="Poster Image"
            className="poster"
          />
        </div>
        <div className="col-6 m-5 text-light">
          <h4>{store.titleDetail.title}</h4>
          <h6 className="fst-italic">{store.titleDetail.tagline}</h6>
          <p className="fw-lighter">
            <strong>Release Date: </strong> {store.titleDetail.release_date}
          </p>
          <div className="d-flex mb-1">
            {store.titleDetail?.genres?.map((genre) => (
              <span className="m-1 border border-2 rounded p-1" key={genre}>
                {genre.name}
              </span>
            ))}
          </div>
          <p className="fw-lighter">
            <strong>Duration: </strong>
            {store.titleDetail.runtime} min.
          </p>
          <p className="fw-lighter">
            <strong>Overview: </strong> {store.titleDetail.overview}
          </p>
          {token ? (
            <button
              className="btn btn-dark"
              onClick={() => {
                actions.addFavorites(movieTitle, userId, movieId);
              }}
            >
              🤍
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
