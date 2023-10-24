import { useState, useContext } from 'react'
import OrderContext from '../../store/OrderContext'
import MenuItem from './MenuItem'
import Modal from '../../UI/Modal/Modal'
import Card from '../../UI/Card/Card'
import pizzaImage from '../../assets/menu-item.png'

const MenuGrid = ({ products }) => {
  const orderContext = useContext(OrderContext)

  const [showModal, setShowModal] = useState(false)
  const [amount, setAmount] = useState(1)
  const [size, setSize] = useState('small')
  const [itemSelected, setItemSelected] = useState({})

  const mymotherfuckingstring = 'double'
  const newString = 'whatever'

  console.log(mymotherfuckingstring)
  console.log(newString)

  const closeModal = () => {
    setShowModal(false)
    resetStates()
  }

  const onItemClicked = (item) => {
    setItemSelected(item)
    setShowModal(true)
  }

  const resetStates = () => {
    setItemSelected({})
    setAmount(1)
    setSize('small')
  }

  const onAddToCart = (e) => {
    e.preventDefault()

    const customPrice = itemSelected.price[size]

    orderContext.addItem({ ...itemSelected, price: customPrice, size, amount })
    resetStates()
    setShowModal(false)
  }

  const onChangeAmountHandler = ({ target }) => {
    setAmount(+target.value)
  }

  const onSizeSelected = (e) => {
    e.preventDefault()
    setSize(e.target.value)
  }

  const content = products.map((element, index) => <MenuItem key={index} product={element} onItemClicked={onItemClicked} />)

  return (
    <>
      {products.length === 0
        ? <h2 className='text-4xl text-white bold my-12'>No products were found</h2>
        : <div>
        <div className='grid lg:grid-cols-2 gap-2 p-4 my-8 mx-auto'>
          {content}
        </div>

        {showModal && (
        <Modal onAction={closeModal}>
        <Card className='fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-800 w-4/5 h-4/5 min-h-[300px] rounded-3xl overflow-hidden z-30'>
          <div className="flex flex-col lg:flex-row justify-center items-center h-full">
            <div className='outline outline-2 outline-slate-800 w-full h-full overflow-hidden p-6 text-center bg-red-500 text-white'>
              <h3 className='text-2xl font-bold'>{itemSelected.title ? itemSelected.title : ''}</h3>
              <img className='h-4/5 mx-auto' src={pizzaImage} alt="pizza image" />
            </div>
            <form className="flex flex-col gap-y-4 justify-evenly items-center w-full h-full p-8 text-white" onSubmit={onAddToCart}>

              <h2 className='text-xl lg:text-2xl font-bold text-center'>How big would you like it?</h2>
              <div className='grid grid-cols-3 text-center'>
                <h4>6 slices</h4>
                <h4>8 slices</h4>
                <h4>12 slices</h4>
                <button className={`border-2 border-black px-2 py-4 ${size === 'small' ? 'bg-green-400' : 'bg-gray-400'} rounded-b-lg hover:bg-green-400`} value={'small'} onClick={onSizeSelected}>Small</button>
                <button className= {`border-2 border-black px-2 py-4 ${size === 'medium' ? 'bg-cyan-500' : 'bg-gray-500'} rounded-b-lg hover:bg-cyan-500`} value={'medium'} onClick={onSizeSelected}>Medium</button>
                <button className= {`border-2 border-black px-2 py-4 ${size === 'jumbo' ? 'bg-red-500' : 'bg-gray-600'} rounded-b-lg hover:bg-red-500`} value={'jumbo'} onClick={onSizeSelected}>Jumbo</button>
              </div>

              <h2 className='text-xl lg:text-2xl font-bold text-center'>How many would you like to order?</h2>
              <div className='flex w-full justify-center'>
                <input className='border-2 border-black p-2 w-2/5 text-black' type="number" name="amount" id="amount" onChange={onChangeAmountHandler} value={amount} min={1} max={20}/>
                <button className='border-2 border-black p-4 bg-slate-800 text-white' type="submit">Add to cart</button>
              </div>
            </form>
          </div>
        </Card>
        </Modal>
        ) }

      </div>
      }
    </>
  )
}

export default MenuGrid
