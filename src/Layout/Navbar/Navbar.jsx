import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/pizza_logo.png'

const Navbar = () => {

  return (
    <nav className='fixed w-full h-[5%] z-20 box-border flex justify-between items-center text-white p-8 bg-slate-800'>
            <div>
                <img className="w-[60px] h-[60px]" src={logo} alt="Pizza logo" />
            </div>

            {false ? <FontAwesomeIcon icon={faBars} size="4x" /> : (
            <ul className='flex list-none justify-evenly w-[250px]'>
                <li className='hover:text-red-500'><a className='text-xl' href="#">Menu</a></li>
                <li className='hover:text-red-500'><a className='text-xl' href="#">Orders</a></li>
                <li className='hover:text-red-500'><a className='text-xl' href="#">Login</a></li>
            </ul>)}
    </nav>
  )
}

export default Navbar