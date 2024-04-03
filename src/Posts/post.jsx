import { useLocation } from "react-router-dom"

export function Post() {
  const { state } = useLocation();

  return <>
    <div className="post-header">{state.post.title}</div>
    <div className="post-body">{state.post.body}</div>
    <div className="post-id">{state.post.id}</div>
  </>
}