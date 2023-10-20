import { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import OrderContext from '../../store/OrderContext'
import { Link } from 'react-router-dom'
import logo from '../../assets/pizza_logo.png'

const Navbar = () => {
  const orderContext = useContext(OrderContext)

  const itemsInCart = orderContext.items.length

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const listItems = [
    <li key={1} className='hover:text-red-500' onClick={() => { setIsDrawerOpen(false) }}>
      <Link to={'/menu'}>
      <span className='text-xl'>Menu</span>
      </Link>
        </li>,
    <li key={2} className='relative' onClick={() => { setIsDrawerOpen(false) }}>
      <Link to={'/myorder'}>
        <span className='hover:text-red-500 text-xl'>Orders</span>
        {itemsInCart > 0 && <span className='absolute bg-red-500 rounded-full w-[20px] h-[20px] text-[13px] bottom-[15px] left-[75px] md:bottom-[13px] md:left-[55px] text-center'>{itemsInCart}</span>}
        </Link>
      </li>,
    <li key={3} className='hover:text-red-500' onClick={() => { setIsDrawerOpen(false) }}>
      <Link to={'/login'}>
        <span className='text-xl'>Login</span>
      </Link>
    </li>
  ]

  return (
    <nav className='fixed w-full h-[5%] z-20 box-border flex justify-between items-center text-white p-8 bg-slate-800'>
      <Link to={'/'}>
        <img className="w-[60px] h-[60px]" src={logo} alt="Pizza logo" />
      </Link>

      <div className='w-[50px] relative text-center md:hidden' onClick={() => { setIsDrawerOpen(!isDrawerOpen) }}>
        <FontAwesomeIcon className='cursor-pointer' icon={faBars} size="2x"/>
        {isDrawerOpen && (
          <div className='bg-slate-900 border-black absolute top-[145%] right-[-75%] min-w-[150px] text-center rounded-md box-border p-4'>
            <ul className='flex flex-col list-none gap-y-8 p-2'>
              {listItems}
            </ul>
          </div>
        )}
      </div>

      <div className='hidden md:block'>
        <ul className='flex list-none justify-evenly w-[250px]'>
          {listItems}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
