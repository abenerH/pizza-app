import React from 'react'
import Card from '../UI/Card/Card'
import pizzaBackground from '../assets/pizza_background.jpg'

const Phrase = () => {
  return (
    <div className='h-[600px] relative text-center'>
      <img className=' w-full h-full object-cover' src={pizzaBackground} alt='Pizza background'/>
        <Card className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[70%] w-[90%] lg:translate-x-[10%] lg:translate-y-[-50%] lg:h-[80%] lg:w-[40%] flex flex-col justify-center items-center shadow-gray shadow-xl p-10 bg-white rounded-md'>
            <q className='italic text-2xl mb-4'>As a wise man once said... anyone can cook, and so anyone can code. Just don't do both at the same time</q>
            <p>-Papa Developer</p>
        </Card>
    </div>
  )
}

export default Phrase