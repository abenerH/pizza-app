import React from 'react'
import DeliveryForm from './Delivery/DeliveryForm';
import PickUpForm from './PickUp/PickUpForm';

const OrderForm = ({onDecrement, onSubmit, orderOption}) => {

  return (
    <>
    {orderOption === 'delivery' 
    ? 
    <DeliveryForm onSubmit={onSubmit} onDecrement={onDecrement} /> 
    : 
    <PickUpForm onSubmit={onSubmit} onDecrement={onDecrement}/>}
    </>
  )
}

export default OrderForm