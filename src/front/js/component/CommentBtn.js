import React from "react";

const CommentBtn = ({
  commentData,
  setReplying,
  setDeleting,
  setDeleteModalState,
  setEditing,
}) => {
  // adding reply

  // console.log(setReplying, setDeleting, se)

  let counter = false;
  const showAddComment = () => {
    counter ? setReplying(false) : setReplying(true);
    counter = true;
  };

  // delete comment
  const showDeleteModal = () => {
    setDeleting(true);
    setDeleteModalState(true);
  };

  // edit comment
  const showEditComment = () => {
    setEditing(true);
  };

  return (
    <div className="comment--btn ">
      <button
        className={`reply-btn btn_base_stle ${
          !commentData.currentUser ? "" : "display--none"
        }`}
        onClick={showAddComment}
      >
        Reply
      </button>
      <button
        className={`delete-btn  btn_base_stle ${
          commentData.currentUser ? "" : "display--none"
        }`}
        onClick={showDeleteModal}
      >
        Delete
      </button>
      <button
        className={`edit-btn btn_base_stle ${commentData.currentUser ? "" : "display--none"}`}
        onClick={showEditComment}
      >
        Edit
      </button>
    </div>
  );
};

export default CommentBtn;
