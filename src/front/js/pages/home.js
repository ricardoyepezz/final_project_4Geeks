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
              <button type="button" className="link_card " data-bs-toggle="modal" data-bs-target="#exampleModal">
              <div className="card">
               <div className="img_box">
               <img
                  src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="ver_mas"><span>ver +</span></div>
               </div>
                <div className="card-body">
                  <h5 className="card-title">{oneMovie.title}</h5>
                  {/* <p className="card-text">{oneMovie.overview}</p> */}
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </button>
              {/* componente del modal */}

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
              {/*  */}

            </div>
          );
        })}
      </div>
    </div>
  );
};
