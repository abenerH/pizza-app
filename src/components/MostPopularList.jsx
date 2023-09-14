import React from 'react'
import FoodItem from './FoodItem/FoodItem'
import popular1 from '../assets/popular1.jpg'
import popular2 from '../assets/popular2.jpg'
import popular3 from '../assets/popular3.jpg'

const MostPopularList = () => {
  return (
    <section className='text-center bg-red-600 py-10'>
        <h2 className='font-bold text-2xl md:text-4xl italic text-white'>Our most popular dishes</h2>
        <ul className='flex flex-col lg:flex-row'>
            <FoodItem image={popular1}/>
            <FoodItem image={popular2}/>
            <FoodItem image={popular3}/>
        </ul>
        <button className='border-2 border-gray-500 my-4 p-4 w-[50%] bg-white'>Check Menu</button>
    </section>
  )
}

export default MostPopularList