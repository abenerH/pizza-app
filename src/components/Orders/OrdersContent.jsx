import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OrderItem from './OrderItem';
import { faMotorcycle, faShop } from '@fortawesome/free-solid-svg-icons';

const OrdersContent = ({onIncrement, items, subtotal}) => {

    const total = (subtotal + subtotal* 0.15).toFixed(2);

    const onIncrementHandler = e => onIncrement(e.target.value);


  return (
    <>
    <div className='min-h-[200px] w-full'>
        {items.map((item) =>
        <OrderItem key={item.id + '-' + item.category} product={item} />)}
    </div>
        <div className='grid grid-cols-2 gap-4 text-lg font-bold w-full md:w-3/4 my-2'>
            <h3>Subtotal:</h3>
            <p>${subtotal}</p>
            <h3>Total: </h3>
            <p>${total}</p>
        </div>
        <div className='w-full flex gap-x-4'>
            <button className='bg-green-500 rounded-lg text-white text-lg py-4 mt-4 w-full lg:w-3/4' value={'pickUp'} onClick={onIncrementHandler}><FontAwesomeIcon icon={faShop} /> Pick Up </button>
            <button className='bg-purple-500 rounded-lg text-white text-lg py-4 mt-4 w-full lg:w-3/4' value={'delivery'} onClick={onIncrementHandler}><FontAwesomeIcon icon={faMotorcycle} /> Delivery</button>
        </div>
    </>
)
}

export default OrdersContent