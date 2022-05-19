import React, { useState } from "react";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

//aca deje todo lo que se podria utilizar de la api
const MovieCarussel = ({ titel, poster_path, vote_average, release_date, overview, }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
      //estes es el carussel. aActualmente se repite 1na vez!
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="carousel-item active">
          {/* style={{width:'14rem'}} */}
          <img
            className="d-block w-100 carusel_img"
            src={API_IMG + poster_path}
          />
        </div>
        {/* <img
          src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2021/11/avatar-2520685.jpg?itok=-Znp5ZFb"
          className="d-block w-100"
          alt="..."
        /> */}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MovieCarussel;
