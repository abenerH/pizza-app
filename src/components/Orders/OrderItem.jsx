import { useContext } from 'react'
import OrderContext from '../../store/OrderContext'
import Card from '../../UI/Card/Card'

const OrderItem = ({ product }) => {
  const orderContext = useContext(OrderContext)

  const onRemoveElementHandler = () => {
    orderContext.removeItem(product.id, product.size)
  }

  const onAddElementHandler = () => {
    orderContext.addItem({ ...product, amount: 1 })
  }

  return (
    <Card className={'w-full min-h-[100px] my-2 lg:py-0 md:px-4 flex items-center'}>
            <h2 className='lg:text-2xl font-bold italic w-2/4 '>{product.title} ({product.size})</h2>
            <div className='w-3/4 flex flex-col md:flex-row gap-x-2 justify-evenly items-center '>
                <p className='lg:text-2xl'>${product.price}</p>
                <p className='lg:text-2xl'>X</p>
                <p className='lg:text-2xl'>{product.amount}</p>
            </div>
            <div className='w-4/5 md:w-2/5 flex gap-x-2'>
              <button className='w-full bg-gray-200 hover:bg-slate-800 rounded-sm hover:text-white font-bold p-2 border-2 border-black text-xl' onClick={onRemoveElementHandler}>-</button>
              <button className='w-full bg-gray-200 hover:bg-slate-800 rounded-sm hover:text-white font-bold p-2 border-2 border-black text-xl' onClick={onAddElementHandler}>+</button>
            </div>
    </Card>
  )
}

export default OrderItem
