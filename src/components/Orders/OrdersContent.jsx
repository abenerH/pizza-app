import React from 'react'
import OrderItem from './OrderItem';
import { faMotorcycle, faShop } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../../UI/Buttons/IconButton';
import { order_options } from '../../helper/dictionary';

const OrdersContent = ({onIncrement, items, subtotal}) => {

    const total = (subtotal + subtotal* 0.15).toFixed(2);
    const onIncrementHandler = value => onIncrement(value);

  return (
    <>
    <div className='min-h-[200px] w-full'>
        {items.map((item) =>
        <OrderItem key={item.id + '-' + item.size} product={item} />)}
    </div>
        <div className='grid grid-cols-2 gap-4 text-lg font-bold w-full md:w-3/4 my-2'>
            <h3>Subtotal:</h3>
            <p>${subtotal}</p>
            <h3>Total: </h3>
            <p>${total}</p>
        </div>
        <div className='w-full flex gap-x-4'>
            <IconButton option={order_options.PICKUP} color={'green'} icon={faShop} onClick={onIncrementHandler}> {order_options.PICKUP}</IconButton>
            <IconButton option={order_options.DELIVERY} color={'purple'} icon={faMotorcycle} onClick={onIncrementHandler}> {order_options.DELIVERY}</IconButton>
        </div>
    </>
)
}

export default OrdersContent