import { useState } from "react";
import { useLocation } from "react-router-dom";
import { EditPost } from "./editPosts";


export function Post() {
  const { state } = useLocation();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <div className="container">
      <div className="single-post-container">
        <div className="post-content">
          <div className="post-header">{state.post.title}</div>
          <div className="post-body">{state.post.body}</div>
          <div className="post-id">User ID: {state.post.userId}</div>
        </div>
        <div className="post-btn-container">
          <button className="delete-btn" type="button">
            Delete Post
          </button>
          <button onClick={openModal} className="edit-btn" type="button">
            Edit Post
          </button>
        </div>
      </div>
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <EditPost />
          
        </div>
      )}
    </div>
  );
}
