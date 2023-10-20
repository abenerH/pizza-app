import DeliveryForm from './Delivery/DeliveryForm'
import PickUpForm from './PickUp/PickUpForm'
import { orderOptions } from '../../../helper/dictionary'

const OrderForm = ({ onDecrement, onSubmit, orderOption }) => {
  return (
    <>
    {orderOption === orderOptions.DELIVERY
      ? <DeliveryForm onSubmit={onSubmit} onDecrement={onDecrement} />
      : <PickUpForm onSubmit={onSubmit} onDecrement={onDecrement}/>}
    </>
  )
}

export default OrderForm
