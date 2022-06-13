import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/comments.css";

export const CommentBox = (movieID) => {
  let token = JSON.parse(localStorage.getItem("token"));
  let user = token.user.id;
  //YA OBTENGO MOVIE ID Y USER ID, FALTA PONERLOS EN EL OBJETO
  console.log("movieID", movieID);
  console.log("user_ID", user);
  const { store, actions } = useContext(Context);

  const [registerForm, setRegisterForm] = useState({
    comment: "",
  });

  const handleChange = (e) => {
    const { comment, value } = e.target;
    const newState = { ...registerForm };
    newState[comment] = value;
    setRegisterForm(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("user", user);
    formData.append("comment", registerForm.comment);
    formData.append("id_movie", movieID);
    actions.commentPost(formData);
  };
  useEffect(() => {
    actions.getComments();
  }, []);

  return (
    <div className="text-center">
      <div
        className="input-group m-3 w-50 p-3"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
          className="form-control"
          placeholder="Comentario"
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          Post!
        </button>
      </div>
      <div className="text-light">
        {store.comments?.comments?.map((oneComment, index) => {
          return (
            <div key={index} className="border-success mb-3">
              <h5 className="card-title">{oneComment.user_id}</h5>
              <p className="card-text">{oneComment.comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
