import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useEffect } from "react";
import Noticias1 from "../../img/Noticias1.jpg";

export const Noticias = () => {
  return (
    <>
           <div className="noticias container-fluid ">
              <h1>Noticias</h1>
            <h4 className="card-title">Card title</h4>
              <img className="card-img-top" src="https://pics.filmaffinity.com/anne-563589884-large.jpg" alt="Card image cap" />
              <div className="card-block">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary btn-inverse">
                  Button
                </a>
              </div>
            </div>
    </>
  );
};
