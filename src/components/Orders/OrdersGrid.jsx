import {useState} from 'react'
import OrderForm from '../Utilities/Form/OrderForm';
import OrdersContent from './OrdersContent';

const OrdersGrid = ({items, subtotal, onOrder}) => {

    const [index, setIndex] = useState(1);
    const [OrderOption, setOrderOption] = useState();

    const incrementIndex = (orderOption) => {

      setOrderOption(orderOption);
      setIndex(index + 1);
    }

    const decrementIndex = () => {
      setIndex(index - 1);
    }

    const onSubmitOrder = (order) => {
      onOrder(order);
    }

    let content;
    
    switch(index){
      case 1: 
        content = <OrdersContent onIncrement={incrementIndex} items={items} subtotal={subtotal} />
        break;
      case 2:
        content = 
        (
          <OrderForm onDecrement={decrementIndex} onSubmit={onSubmitOrder} orderOption={OrderOption}/>
        )
        
    }

  return (
    <>
      <div className='bg-white border-4 mx-auto w-[90%] md:w-2/4 min-h-[500px] p-4 md:p-8 flex flex-col items-center'>
            <h2 className='my-4 text-2xl font-bold'>Your order: </h2>
            {content}
      </div>
    </>
  )
}

export default OrdersGrid