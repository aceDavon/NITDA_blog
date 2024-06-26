import { Outlet } from "react-router-dom"
function App() {
  return (
    <>
      <div className="w-full">
        <div className="header"></div>
        <div className="page-content">
          <div className="sidebar"></div>
          <Outlet />
        </div>
        <div className="footer"></div>
      </div>
    </>
  )
}

export default App
