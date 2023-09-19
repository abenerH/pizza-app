import React from 'react'
import Card from '../../UI/Card/Card'
import menuItem from '../../assets/menu-item.png'

const MenuItem = ({product}) => {

  return (
    <Card className={'bg-slate-800 rounded-xl flex overflow-hidden text-white max-h-[250px] cursor-pointer hover:bg-slate-600 px-8'}>
        <img className='w-2/4 h-4/5 object-cover self-center' src={menuItem} alt="Item" loading='lazy'/>
        <div className='self-center'>
            <h2 className='text-lg lg:text-2xl font-bold italic'>{product.title}</h2>
            <p>{product.description}</p>
            <p className='font-bold text-xl lg:text-2xl'>${product.price}</p>
        </div>
    </Card>
  )
}

export default MenuItem