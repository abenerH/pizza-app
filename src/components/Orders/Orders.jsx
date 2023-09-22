import {useContext} from 'react'
import OrderContext from '../../store/OrderContext'
import { Link } from 'react-router-dom';
import OrdersGrid from './OrdersGrid';

const Orders = () => {

    const orderContext = useContext(OrderContext);

    const items = orderContext.items;
    const subtotal = +orderContext.total.toFixed(2);
  
    return (
      <div className='min-h-[100vh] bg-red-500 text-center pt-[100px] pb-[13rem] px-[2rem] flex flex-col justify-center items-center'>
  
        {items.length === 0 ? (
        <>
          <h2 className='text-xl text-white'>No items have been added! Check our menu and please yourself with a delicious pizza</h2>
          <Link to={'/menu'}><button className='bg-slate-800 text-white p-4 mt-4 hover:bg-slate-700 rounded-lg text-xl'>Check our menu</button></Link>
        </>) : (
          <OrdersGrid items={items} subtotal={subtotal}/>
        )}
      </div>
    )
}

export default Orders