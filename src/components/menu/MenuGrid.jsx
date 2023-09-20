import {useState} from 'react'
import MenuItem from './MenuItem'
import Modal from '../../UI/Modal/Modal'
import Card from '../../UI/Card/Card'
import pizza_image from '../../assets/menu-item.png'

const MenuGrid = ({products}) => {

  const [showModal, setShowModal] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  // const openModal = () =>{
  //   setShowModal(true);
  // }

  const closeModal = () =>{
    setShowModal(false);
  }

  const onItemClicked = (item) => {
    setItemSelected(item);
    setShowModal(true);
  }


  const content = products.map((element, index) => <MenuItem key={index} product={element} onItemClicked={onItemClicked} />)

  return (
    <>
      {products.length === 0 ? <h2 className='text-4xl text-white bold my-12'>No products were found</h2> :
      <div>
        <div className='w-full grid lg:grid-cols-2 gap-2 my-8 mx-auto'>
          {content}
        </div>

        {showModal && (
        <Modal onAction={closeModal}>
        <Card className='fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white w-4/5 h-4/5 rounded-3xl overflow-hidden z-30'>
          <div className="flex flex-col lg:flex-row justify-center items-center h-full">
            <div className='outline outline-2 outline-slate-800 w-full h-full overflow-hidden p-6 text-center'>
              <h3 className='text-lg font-bold'>{itemSelected.title ? itemSelected.title : ""}</h3>
              <img className='h-4/5 mx-auto' src={pizza_image} alt="pizza image" />
            </div> 
            <form className="flex flex-col justify-evenly items-center w-full h-full p-8" onSubmit={closeModal}>
              <h2 className='text-xl lg:text-4xl'>How many would you like to order?</h2>
              <div className='flex w-full justify-center'>
                <input className='border-2 border-black p-2 w-2/5' type="number" name="quantity" id="quantity" defaultValue={1} min={1} max={20}/>
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