import React from 'react'
import MenuGrid from '../components/menu/MenuGrid'

const Menu = () => {
  return (
    <div className='bg-red-500 text-center pt-[100px] pb-[13rem] px-[2rem]'>
      <h2 className='text-4xl text-white bold italic'>What are you craving for today?</h2>
      <MenuGrid />
    </div >
  )
}

export default Menu