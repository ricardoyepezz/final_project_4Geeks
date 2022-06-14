import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/detail.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import background from "../../img/752715.jpg";
import BackdropFilter from "react-backdrop-filter";
import Movlogo from "../../img/Movlogo.png";

export const Home = () => {
  const { store, actions } = useContext(Context);
  let token = localStorage.getItem("token");

  useEffect(() => {
    actions.getMovies();
  }, []);

  return (
    <>
      <div style={{ backgroundImage: `url(${background})` }}>
        <div className="banner">
          <h1>Más que ver!</h1>
          <p>
            Moviez te ayuda a seleccionar la próxima película perfecta para ver.
          </p>
          {!token ? (
            <>
              <a
                type="button"
                className="btn btn-secondary btn-lg m-1"
                href="/signup"
              >
                Registro
              </a>
              <a
                type="button"
                className="btn btn-secondary btn-lg m-1"
                href="/login"
              >
                Entrar
              </a>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="cuerpo row m-1">
          <h1 className="text-light">Explora películas</h1>
          {store.titles?.results?.slice(0, 12).map((oneMovie, index) => {
            return (
              <div
                key={index}
                className="col-4 col-md-3 col-lg-2 text-center p-3"
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
    </>
  );
};
