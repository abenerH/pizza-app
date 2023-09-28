import {useState} from 'react'
import OrderItem from './OrderItem'
import OrderForm from '../Utilities/Form/OrderForm';

const OrdersGrid = ({items, subtotal}) => {

    const total = (subtotal + subtotal* 0.15).toFixed(2);
    const [index, setIndex] = useState(1);

    const incrementIndex = () => {
      setIndex(index + 1);
    }

    const decrementIndex = () => {
      setIndex(index - 1);
    }

    const onSubmitOrder = () => {
      alert("Your order has been submitted");
    }

    let content;
    
    switch(index){
      case 1: 
        content =
          (<>
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
            <button className='bg-green-500 rounded-lg text-white text-lg py-4 mt-4 w-full lg:w-3/4' onClick={incrementIndex}>Next</button>
            </>)
        break;
      case 2:
        content = 
        (
          <OrderForm onDecrement={decrementIndex} onSubmit={onSubmitOrder}/>
        )
        
    }

  return (
    <>
        <div className='bg-white border-4 mx-auto w-[90%] md:w-2/4 min-h-[500px]  p-4 flex flex-col items-center'>
            <h2 className='my-4 text-2xl font-bold'>Your order: </h2>
            {content}
      </div>

    </>
  )
}

export default OrdersGrid