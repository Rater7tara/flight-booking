import { Outlet } from "react-router-dom";
import './App.css'
import Footer from "./Pages/Shared/Footer/Footer";
import NavBar from "./Pages/Shared/NavBar/NavBar";

function App() {

  return (
    <>
    <NavBar></NavBar>
      <Outlet></Outlet>
      
    </>
  )
}

export default App
