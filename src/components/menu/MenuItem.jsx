import React from 'react'
import Card from '../../UI/Card/Card'
import menuItem from '../../assets/menu-item.png'

const MenuItem = ({product, onItemClicked}) => {

  const itemClickedHandler = () => {
    onItemClicked(product);
  }

  return (
    <Card className={'bg-slate-800 rounded-xl flex overflow-hidden text-white max-h-[250px] cursor-pointer hover:bg-slate-600 p-6 lg:py-0 lg:px-4'} onclick={itemClickedHandler}>
        <img className='w-2/4 h-4/5 object-cover self-center' src={menuItem} alt="Item" loading='lazy'/>
        <div className='w-3/4 self-center'>
            <h2 className='text-lg lg:text-2xl font-bold italic'>{product.title}</h2>
            <p className='text-sm lg:text-xl'>{product.description}</p>
            <p className='font-bold text-xl lg:text-2xl'>${product.price}</p>
        </div>
    </Card>
  )
}

export default MenuItem