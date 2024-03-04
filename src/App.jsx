import { Outlet } from "react-router-dom";
import './App.css'
import Footer from "./Pages/Shared/Footer/Footer";
import NavBar from "./Pages/Shared/NavBar/NavBar";

function App() {

  return (
    <>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </>
  )
}

export default App
