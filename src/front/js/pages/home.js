import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/detail.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Noticias } from "../component/noticias";

export const Home = () => {
  const { store, actions } = useContext(Context);
  let token = localStorage.getItem("token");

  useEffect(() => {
    actions.getMovies();
    console.log(store.titles);
  }, []);

  return (
    <div className="row">
      <div className="cuerpo row">
        {store.titles?.results?.slice(0, 18).map((oneMovie, index) => {
          return (
            <div key={index} className="col-4 col-md-3 col-lg-2 text-center p-1">
              <Link className="card_link" to={"detail/" + oneMovie.id}>
                <div className="card">
                <span className="open_link"><div className="link_mas">+</div></span>
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
