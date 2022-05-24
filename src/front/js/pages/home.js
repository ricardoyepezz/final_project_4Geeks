import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useEffect } from "react";
import { Noticias } from "../component/noticias";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getMovies();
    console.log(store.titles);
  }, []);

  return (
    <div className="row">
      <div className="cuerpo row">
        {store.titles?.results?.slice(0, 18).map((oneMovie, index) => {
          return (
            <div key={index} className="col-2 text-center p-1">
              <div className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{oneMovie.title}</h5>
                  {/* <p className="card-text">{oneMovie.overview}</p> */}
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
