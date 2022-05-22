import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useEffect } from "react";
import Noticias1 from "../../img/Noticias1.jpg";

export const Noticias = () => {
  return (
    <>
      <div className="noticias container-fluid bg-warning">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://media.revistagq.com/photos/61851af57701883d93085304/4:3/w_1332,h_999,c_limit/eternals-peliculas-ver-antes.jpeg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.{" "}
                </p>
                <span>
                  <button>Leer más 📽️</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
