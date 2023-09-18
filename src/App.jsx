import Navbar from './Layout/Navbar/Navbar'
import { Outlet } from "react-router-dom";
import Footer from '../src/components/Footer'

function App() {

  return (
    <>
    <Navbar/>
      <Outlet />
    <Footer />
    </>
  )
}

export default App
