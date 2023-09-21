import React from 'react'
import OrderItem from './OrderItem'

const OrdersGrid = ({items, subtotal}) => {

    const total = (subtotal + subtotal* 0.15).toFixed(2);

  return (
    <>
        <div className='bg-white border-4 mx-auto w-4/5 p-4 flex flex-col items-center'>
            <h2 className='my-4 text-2xl font-bold'>Your orders: </h2>
            {items.map((item) =>
            <OrderItem product={item} />)}
            <div className='grid grid-cols-2 gap-4 text-lg font-bold w-full my-2'>
                <h3>Subtotal:</h3>
                <p>${subtotal}</p>
                <h3>Total: </h3>
                <p>${total}</p>
            </div>
            <button className='bg-green-500 text-white text-lg py-4 mt-4 w-full md:w-2/4'>Pay</button>
      </div>

    </>
  )
}

export default OrdersGrid