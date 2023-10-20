import OrderItem from './OrderItem'
import { faMotorcycle, faShop } from '@fortawesome/free-solid-svg-icons'
import IconButton from '../../UI/Buttons/IconButton'
import { orderOptions } from '../../helper/dictionary'
import PropTypes from 'prop-types'

const OrdersContent = ({ onIncrement, items, subtotal }) => {
  const total = (subtotal + subtotal * 0.15).toFixed(2)
  const onIncrementHandler = value => onIncrement(value)

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
            <IconButton option={orderOptions.PICKUP} color={'green'} icon={faShop} onClick={onIncrementHandler}> {orderOptions.PICKUP}</IconButton>
            <IconButton option={orderOptions.DELIVERY} color={'purple'} icon={faMotorcycle} onClick={onIncrementHandler}> {orderOptions.DELIVERY}</IconButton>
        </div>
    </>
  )
}

OrdersContent.propTypes = {
  onIncrement: PropTypes.func,
  items: PropTypes.array,
  subtotal: PropTypes.number
}

export default OrdersContent
