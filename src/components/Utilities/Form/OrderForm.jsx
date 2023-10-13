import React from 'react'
import DeliveryForm from './Delivery/DeliveryForm';
import PickUpForm from './PickUp/PickUpForm';
import { order_options } from '../../../helper/dictionary';

const OrderForm = ({onDecrement, onSubmit, orderOption}) => {

  return (
    <>
    {orderOption === order_options.DELIVERY 
    ? 
    <DeliveryForm onSubmit={onSubmit} onDecrement={onDecrement} /> 
    : 
    <PickUpForm onSubmit={onSubmit} onDecrement={onDecrement}/>}
    </>
  )
}

export default OrderForm