import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useEffect } from "react";
export const Terror = () => {
  return (
    <>
      <div className="row container-fluid col-12">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade w-50 col-8"
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
        </div>


        <div className="col-2"></div>

<div className=" SideRight row col-4">
  <div className="SideTitle1">Top 5 del género</div>
  <div className="card col-6 mx-auto d-block">
    <h5 className="card-title">Special title treatment</h5>
    <div className="img1 mx-auto">
      <img className="imgside col-6"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdRTK-TP57tC8-Qkn-fLxEsfjDk7pkCtCZA&usqp=CAU" />
    </div>
    <div className="card-body col-12">
      <p className="card-text">
        With supporting text below as a natural lead-in to additional
        content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>

  <span></span>

  <div className="card col-6 mx-auto d-block">
    <h5 className="card-title">Special title treatment</h5>
    <div className="img1">
      <img className="imgside col-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdRTK-TP57tC8-Qkn-fLxEsfjDk7pkCtCZA&usqp=CAU" />
    </div>
    <div className="card-body col-12">
      <p className="card-text">
        With supporting text below as a natural lead-in to additional
        content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>

  <span></span>
  <div className="card col-6 mx-auto d-block">
    <h5 className="card-title">Special title treatment</h5>
    <div className="img1">
      <img className="imgside col-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdRTK-TP57tC8-Qkn-fLxEsfjDk7pkCtCZA&usqp=CAU" />
    </div>
    <div className="card-body col-12">
      <p className="card-text">
        With supporting text below as a natural lead-in to additional
        content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
  <span></span>
  <div className="card col-6 mx-auto d-block">
    <h5 className="card-title">Special title treatment</h5>
    <div className="img1">
      <img className="imgside col-6"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdRTK-TP57tC8-Qkn-fLxEsfjDk7pkCtCZA&usqp=CAU" />
    </div>
    <div className="card-body col-12">
      <p className="card-text">
        With supporting text below as a natural lead-in to additional
        content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
</div>{" "}
        </div>		  
    </>
  );
};
