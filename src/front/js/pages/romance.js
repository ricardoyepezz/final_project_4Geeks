import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Romance = () => {
  const { store, actions } = useContext(Context);
  let token = localStorage.getItem("token");

  useEffect(() => {
    actions.getRomanceTitles();
  }, []);

  return (
    <div className="row">
      <div className="cuerpo row">
        {store.romanceTitles?.results?.slice(0, 18).map((oneMovie, index) => {
          return (
            <div
              key={index}
              className="col-4 col-md-3 col-lg-2 text-center p-1"
            >
              <Link className="card_link" to={"detail/" + oneMovie.id}>
                <div className="card">
                  <span className="open_link">
                    <div className="link_mas">+</div>
                  </span>
                  <div className="img_box">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                  {token ? (
                    <button
                      className="favorite-btn"
                      onClick={() => {
                        actions.addFavorites(oneMovie.title);
                      }}
                    >
                      🖤
                    </button>
                  ) : (
                    ""
                  )}

                  <span className="rating">{oneMovie.vote_average}</span>
                  <div className="card-body">
                    <h5 className="card-title">{oneMovie.title}</h5>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
