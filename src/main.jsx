import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AllPosts } from './Posts/allPosts.jsx'
import { Post } from './Posts/post.jsx'
import { EditPost } from './Posts/editPosts.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />} path="/">
        <Route path="posts">
          <Route element={<AllPosts />} path="all" index />
          <Route element={<Post />} path=":postId/post" />
          <Route element={<EditPost />} path="edit/:postId/post" />
          <Route element={<AllPosts />} path="delete/:postId/post" />
        </Route>
        <Route path="comments">
          <Route element={<></>} path=':postId/comments' />
          <Route path=':commentId/comment' element={<></>} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
