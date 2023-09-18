import React from 'react'
import Card from '../../UI/Card/Card'
import menuItem from '../../assets/menu-item.png'

const MenuItem = () => {
  return (
    <Card className={'bg-slate-800 rounded-xl flex overflow-hidden text-white p-8 max-h-[300px] cursor-pointer hover:bg-slate-600'}>
        <img className='w-2/4 h-full' src={menuItem} alt="Item" loading='lazy'/>
        <div className='self-center'>
            <h2 className='text-2xl lg:text-4xl'>Food title</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, voluptate.</p>
        </div>
    </Card>
  )
}

export default MenuItem