import React from 'react'
import discount_image from '../assets/discounts.png'

const Discounts = () => {
  return (
    <section className='bg-red-500 h-[600px] w-full text-center p-8 flex flex-col lg:flex-row justify-center items-center'>
        
        <h2 className='text-white text-4xl lg:text-6xl underline'>
            Celebrating our anniversary
        </h2>

        <img className='h-[60%] mx-auto my-4 rotate-12' src={discount_image} alt="Discount image" loading='lazy'/>

        <p className='text-2xl lg:text-4xl text-white'>Up to 25% discount for any purchase superior to $20</p>


    </section>
  )
}

export default Discounts