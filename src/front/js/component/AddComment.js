import React, { useState } from "react";
import "../../styles/addComments.scss";

const AddComment = ({ buttonValue, addComments, replyingTo }) => {
  const replyingToUser = replyingTo ? `@${replyingTo}, ` : "";
  const [comment, setComment] = useState("");

  const clickHandler = () => {
    if (comment === "" || comment === " ") return;
    let data = JSON.parse(localStorage.getItem("token"));
    let userId = data.user.id;
    let username = data.user.name;

    const newComment = {
      id: userId,
      content: replyingToUser + comment,
      createdAt: new Date(),
      score: 0,
      username: username,
      currentUser: true,
      replies: [],
    };

    addComments(newComment);
    setComment("");
  };

  return (
    <div className="add-comment">
      <div className="profile-pic"></div>
      <textarea
        className="comment-input"
        placeholder="Enter your comment here"
        value={replyingToUser + comment}
        onChange={(e) => {
          setComment(
            e.target.value.replace(replyingTo ? `@${replyingTo}, ` : "", "")
          );
        }}
      />
      <div className="send-btn-container">
        <div className="profile-pic"></div>
        <button className="add-btn btn_base_stle" onClick={clickHandler}>
          {buttonValue}
        </button>
      </div>
    </div>
  );
};

export default AddComment;
