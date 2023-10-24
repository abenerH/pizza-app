import Navbar from './Layout/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Layout/Footer/Footer'

function App () {
  return (
    <>
    <Navbar/>
      <Outlet />
    <Footer />
    </>
  )
}

export default App
