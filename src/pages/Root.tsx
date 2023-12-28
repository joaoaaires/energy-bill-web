import { Outlet } from "react-router-dom"
import Header from "../components/Header"

function Root() {
  return (
    <>
      <Header />
      <div id="detail">
        <Outlet /> 
      </div>
    </>
  )
}

export default Root