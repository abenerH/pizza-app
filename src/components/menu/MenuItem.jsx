import React from 'react'
import Card from '../../UI/Card/Card'
import menuItem from '../../assets/menu-item.png'

const MenuItem = ({product, onItemClicked}) => {

  const itemClickedHandler = () => {
    onItemClicked(product);
  }

  const small = `$${product.price.toFixed(2)}`;
  const middle = `$${(product.price + product.price * 0.30).toFixed(2)}`;
  const jumbo = `$${(product.price + product.price * 0.75).toFixed(2)}`;

  return (
    <Card className={'bg-slate-800 rounded-xl flex overflow-hidden text-white max-h-[250px] cursor-pointer hover:bg-slate-600 p-6 lg:py-0 lg:px-4'} onclick={itemClickedHandler}>
        <img className='w-2/4 h-4/5 object-cover self-center' src={menuItem} alt="Item" loading='lazy'/>
        <div className='w-3/4 self-center'>
            <h2 className='text-lg lg:text-2xl font-bold italic'>{product.title}</h2>
            <p className='text-sm md:text-lg lg:text-xl mb-4'>{product.description}</p>
            <div className='flex justify-evenly'>
              <p className='font-bold sm:text-xl lg:text-2xl bg-cyan-400 p-1 rounded-lg'>{small}</p>
              <p className='font-bold sm:text-xl lg:text-2xl bg-green-400 p-1 rounded-lg'>{middle}</p>
              <p className='font-bold sm:text-xl lg:text-2xl bg-red-400 p-1 rounded-lg'>{jumbo}</p>
            </div>
        </div>
    </Card>
  )
}

export default MenuItem