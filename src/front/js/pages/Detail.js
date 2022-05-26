import React from "react";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    actions.getTitleDetail(id);
  }, []);
  return (
    <div className="row">
      <div className="cuerpo row">
        <div className="col-2 text-center p-1">
          <div className="card">
            <div className="img_box">
              <img
                src={`https://image.tmdb.org/t/p/w500/${store.titleDetail.poster_path}`}
                className="card-img-top"
                alt="..."
              />
            </div>
            <button className="favorite-btn" onClick={actions.addFavorites}>
              🖤
            </button>
            <span className="rating">{store.titleDetail.vote_average}</span>
            <div className="card-body">
              <h5 className="card-title">{store.titleDetail.title}</h5>
            </div>
          </div>
        </div>
        ;
      </div>
    </div>
  );
};
