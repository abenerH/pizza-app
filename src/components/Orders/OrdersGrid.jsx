import {useState} from 'react'
import OrderItem from './OrderItem'

const OrdersGrid = ({items, subtotal}) => {

    const total = (subtotal + subtotal* 0.15).toFixed(2);
    const [index, setIndex] = useState(1);

    const incrementIndex = () => {
      setIndex(index + 1);
    }

    const decrementIndex = () => {
      setIndex(index - 1);
    }

    let content;
    
    switch(index){
      case 1: 
        content =
          (<>
          <div className='min-h-[200px] w-full'>
            {items.map((item) =>
            <OrderItem product={item} />)}
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
          <>
            <form className='w-full md:w-3/4'>
              <h3>We just need some info for your delivery</h3>
              <div className='flex flex-col items-center my-4'>
                <label htmlFor="firstName">First name:</label>
                <input className='w-full border-2 border-gray-400 p-2' type="text" name="firstName" id="firstName"/>
              </div>
              <div className='flex flex-col items-center w-full my-4'>
                <label htmlFor="lastName">Last name:</label>
                <input className='w-full border-2 border-gray-400 p-2' type="text" name="lastName" id="lastName"/>
              </div>
              <div className='flex flex-col items-center w-full my-4'>
                <label htmlFor="telephone">Phone number:</label>
                <input className='w-full border-2 border-gray-400 p-2' type="tel" name="telephone" id="telephone"/>
              </div>
              <div className='flex flex-col items-center w-full my-4'>
                <label htmlFor="address">Address for delivery:</label>
                <textarea className='w-full border-2 border-gray-400 resize-none' name="address" id="address"/>
              </div>
            </form>
            <div className='flex w-full gap-x-2'>
              <button className='bg-red-500 rounded-lg  text-white text-lg py-4 mt-4 w-full md:w-2/4' onClick={decrementIndex}>Go back</button>
              <button className='bg-green-500 rounded-lg text-white text-lg py-4 mt-4 w-full md:w-2/4'>Order now</button>
            </div>
          </>
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