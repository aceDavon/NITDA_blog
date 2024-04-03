import { useEffect, useState } from "react"
import react_log from "../assets/react.svg"
import { Link } from "react-router-dom"

export function AllPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((data) => setPosts(data))
  }, [])

  return (
    <>
      <div className="container">
        <div className="top-header">
          <div className="logo-section">
            <img src={react_log} alt="logo" />
            <span>Posts Blog</span>
          </div>
          <div className="top-nav">
            <ul className="list">
              <li className="list-item">Home</li>
              <li className="list-item">About</li>
              <li className="list-item">Comments</li>
              <li className="list-item">FAQs</li>
            </ul>
          </div>
        </div>
        <div className="post-section">
          <div className="post-label">
            <h1>All Posts</h1>
          </div>
          <div className="post-container">
            <div className="post-table-container">
              <table>
                <thead>
                  <tr>
                    <td>s/no</td>
                    <td>title</td>
                    <td>user id</td>
                    <td>description</td>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post, index) => (
                    <tr className="post-rows" key={index}>
                      <td>{post.id}</td>
                      <td>
                        <Link to={`/posts/${post.id}/post`} state={{ post }}>
                          {post.title}
                        </Link>
                      </td>
                      <td>{post.userId}</td>
                      <td>{post.body}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <span>some description</span>
          </div>
        </div>
      </div>
    </>
  )
}
