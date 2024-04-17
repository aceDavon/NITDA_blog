import { useState } from "react"
import { useLocation } from "react-router-dom"
import { EditPost } from "./editPosts"

export function Post() {
  const { state } = useLocation()
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="single-post-container">
      <div className="post-header">{state.post.title}</div>
      <div className="post-body">{state.post.body}</div>
      <div className="post-id">{state.post.userId}</div>
      <div className="post-btn-container">
        <button className="delete-btn" type="button">
          Delete Post
        </button>
        <button
          onClick={() => setShowModal(!showModal)}
          className="edit-btn"
          id="edit"
          type="button"
        >
          Edit Post
        </button>
      </div>
      {showModal && <EditPost />}
    </div>
  )
}
