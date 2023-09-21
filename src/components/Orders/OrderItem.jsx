import Card from '../../UI/Card/Card'
import menuItem from '../../assets/menu-item.png'

const OrderItem = ({product}) => {
  return (
    <Card className={'w-full min-h-[150px] rounded-sm my-2 cursor-pointer lg:py-0 lg:px-4 flex justify-evenly items-center'}>
            <h2 className='text-lg lg:text-2xl font-bold italic'>{product.title}</h2>
            <div className='w-2/4 flex flex-col md:flex-row justify-evenly items-center '>
                <p className='lg:text-2xl'>${product.price}</p>
                <p className='lg:text-2xl'>X</p>
                <p className='lg:text-2xl'>{product.amount}</p>
            </div>
    </Card>
  )
}

export default OrderItem