import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Terror = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getHorrorTitles();
  }, []);

  return (
    <div className="row">
      <div className="cuerpo row">
        {store.horrorTitles?.results?.slice(0, 18).map((oneMovie, index) => {
          return (
            <div key={index} className="col-2 text-center p-1">
              <div className="card">
                <div className="img_box">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <button className="favorite-btn" onClick={actions.addFavorites}>
                  🖤
                </button>
                <Link to={"detail/" + oneMovie.id}>
                  <button className="detail-btn">✖️</button>
                </Link>

                <span className="rating">{oneMovie.vote_average}</span>
                <div className="card-body">
                  <h5 className="card-title">{oneMovie.title}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
