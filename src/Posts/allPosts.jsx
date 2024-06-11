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
      <div className="w-full">
        {/* Header component */}
        <div className="flex justify-between items-center px-2 py-6 shadow-md shadow-slate-100">
          {/* logo section */}
          <div className="flex items-center space-x-2">
            <img src={react_log} alt="logo" />
            <span>Posts Blog</span>
          </div>
          {/* navigation section */}
          <div>
            <ul className="flex space-x-2">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Comments</li>
              <li className="cursor-pointer">FAQs</li>
            </ul>
          </div>
        </div>
        {/* main component body */}
        <div className="flex flex-col space-y-4 mt-8">
          {/* posts header */}
          <div className="grid place-items-center w-full">
            <h1 className="font-semibold text-4xl">All Posts</h1>
          </div>
          <div className="w-full">
            <div className="mx-auto w-2/3">
              <table className="table">
                <thead className="w-full">
                  <tr className="w-full">
                    <th className="w-16 text-center">s/no</th>
                    <th className="w-1/3 text-center">title</th>
                    <th className="w-16 text-center">user id</th>
                    <th className="w-1/3 text-center">description</th>
                  </tr>
                </thead>
                <tbody className="">
                  {posts.map((post, index) => (
                    <tr className="border-b-2" key={index}>
                      <td className="text-center py-4">{post.id}</td>
                      <td className="text-center py-4">
                        <Link to={`/posts/${post.id}/post`} state={{ post }}>
                          {post.title}
                        </Link>
                      </td>
                      <td className="text-center py-4">{post.userId}</td>
                      <td className="text-center py-4">{post.body}</td>
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
