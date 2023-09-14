import React from 'react'
import placeholder from '../../assets/placeholder_image.png';
import Card from '../../UI/Card/Card';

const FoodItem = ({image}) => {
  return (
    <li>
        <Card className='flex flex-col w-[80%] sm:w-[60%] lg:w-[90%] h-[500px] mx-auto my-4 text-center shadow-xl bg-slate-800 text-white p-2 cursor-pointer'>
            <img className='h-[65%] md:h-[75%] object-cover' src={image} alt="Image placeholder" />
            <div className='p-2'>
              <h3 className='text-2xl mb-2 font-bold'>Food title</h3>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquam illum quas, voluptatem recusandae vel.
              </p>
            </div>
        </Card>
    </li>
  )
}

export default FoodItem