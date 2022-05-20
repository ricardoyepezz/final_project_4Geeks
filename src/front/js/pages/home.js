import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import MovieCarussel from "../component/MovieCarussel";
import { useEffect } from "react";
import { useState } from "react";
import { Form } from "../component/form";

export const Home = () => {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=2a8055a3a945fa4660b744a67d6d0f7a";
  const { store, actions } = useContext(Context);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined)
      actions.getMessage();
  }, [store.token]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <>
      <div className="cuerpo container-fluid">
        <div className="alert">{store.message}</div>
        <div className="row container-fluid col-12">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade w-50"
            data-bs-ride="carousel"
          >
            {movies.map((movieReq) => (
              <MovieCarussel key={movieReq.id} {...movieReq} />
            ))}

            <div className="recomendadas card text-start mt-5">
              <div className="card-body">
                <h5 className="card-title ">🍿Noticias y Estrenos🍿</h5>
                <div>
                  <p className="card-text">
                    <img
                      className="cardPic"
                      src="https://vader.news/__export/1589127555217/sites/gadgets/img/2020/05/10/avatar-2-baby.jpg_672404822.jpg"
                    />
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-dark">
                    Ver más➜...
                  </a>
                </div>

                <span></span>

                <div>
                  <p className="card-text">
                    <img
                      className="cardPic"
                      src="https://i.ytimg.com/vi/1lZuVNZyukU/maxresdefault.jpg"
                    />
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-dark">
                    Ver más➜...
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
          <div className=" SideRight row col-4">
            <div className="SideTitle">Top 5</div>
            <div className="card col-6 mx-auto d-block">
              <h5 className="card-title">Special title treatment</h5>
              <div className="img1 mx-auto">
                <img
                  className="imgside col-6"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdRTK-TP57tC8-Qkn-fLxEsfjDk7pkCtCZA&usqp=CAU"
                />
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
                <img
                  className="imgside col-6"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdRTK-TP57tC8-Qkn-fLxEsfjDk7pkCtCZA&usqp=CAU"
                />
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
                <img
                  className="imgside col-6"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdRTK-TP57tC8-Qkn-fLxEsfjDk7pkCtCZA&usqp=CAU"
                />
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
                <img
                  className="imgside col-6"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdRTK-TP57tC8-Qkn-fLxEsfjDk7pkCtCZA&usqp=CAU"
                />
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
      </div>
    </>
  );
};
