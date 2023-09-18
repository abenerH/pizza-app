import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import logo from '../../assets/pizza_logo.png'

const Navbar = () => {

  return (
    <nav className='fixed w-full h-[5%] z-20 box-border flex justify-between items-center text-white p-8 bg-slate-800'>
            <div>
              <Link to={'/'}>
                <img className="w-[60px] h-[60px]" src={logo} alt="Pizza logo" />
              </Link>
            </div>

            {false ? <FontAwesomeIcon icon={faBars} size="4x" /> : (
            <ul className='flex list-none justify-evenly w-[250px]'>
                <li className='hover:text-red-500'>
                  <Link  to={'/menu'}>
                  <span className='text-xl'>Menu</span>
                  </Link>
                    </li>
                <li className='hover:text-red-500'>
                  <Link to={'/myorder'}>
                    <span className='text-xl'>Orders</span>
                    </Link>
                  </li>
                <li className='hover:text-red-500'>
                  <Link to={'/login'}>
                    <span className='text-xl'>Login</span>
                  </Link>
                </li>
            </ul>)}
    </nav>
  )
}

export default Navbar