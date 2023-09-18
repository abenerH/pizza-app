import React from 'react'
import { useRouteError } from "react-router-dom";
import logo from '../assets/pizza_logo.png'

const ErrorPage = () => {
    const error = useRouteError();

  return (
    <div className='h-[100vh] w-full bg-red-500 flex flex-col justify-center items-center text-white '>
        <h2 className='text-4xl my-4'>Oops!</h2>
        <p className='text-xl'>An unexpected error ocurred</p>
        <img className='w-[60px] h-[60px] mt-8' src={logo} alt="Pizza Logo" />
        <p className='text-xl text-orange-200'>
            <i>{error.statusText || error.message}</i>
        </p>
    </div>
  )
}

export default ErrorPage