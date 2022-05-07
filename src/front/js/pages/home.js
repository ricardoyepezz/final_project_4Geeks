import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useEffect } from "react";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined)
      actions.getMessage();
  }, [store.token]);

  return (
    <>
      <div className="container text-center mt-5">
        <div className="alert alert-info">{store.message}</div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade w-50"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2021/11/avatar-2520685.jpg?itok=-Znp5ZFb"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.ytimg.com/vi/_40CDeU_BwI/maxresdefault.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.ytimg.com/vi/gn1pz0rnNHs/maxresdefault.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>

          <div className="recomendadas card text-end mt-5">
            <div className="card-body">
              <h5 className="card-title ">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
