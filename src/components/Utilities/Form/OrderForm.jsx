import React from 'react'
import useInput from '../../hooks/use-input'

const OrderForm = ({onDecrement, onSubmit}) => {

    //Validations
    function validateName (value){
        return value.trim() !== '';
    }

    function validatePhone(value){
        const onlyNumbersRegex = new RegExp('^[0-9]*$', 'g');
        const formatted = value.replace(/\s+/g, '')
        return formatted.length >= 8 && onlyNumbersRegex.test(formatted) ;
    }

    function validateAddress(value){
        return value.trim().length > 8;
    }

    const firstName = useInput(validateName);
    const lastName = useInput(validateName);
    const phone = useInput(validatePhone);
    const address = useInput(validateAddress);

    const formIsValid = firstName.isValid && lastName.isValid && phone.isValid && address.isValid;
   
    const cleanInputs = () => {
        firstName.reset();
        lastName.reset();
        phone.reset();
        address.reset();
    }

    const onSubmitHandler = () => {
        cleanInputs();
        onSubmit();
    }

  return (
    <>
        <form className='w-full md:w-3/4'>
            <h3>We just need some info for your delivery</h3>
            <div className='flex flex-col items-center my-4'>
                <label htmlFor="firstName">First name:</label>
                <input className='w-full border-2 border-gray-400 p-2' type="text" name="firstName" id="firstName" value={firstName.value} onChange={firstName.onInputChangeHandler} onBlur={firstName.onInputBlurHandler}/>
                {firstName.hasError && <p className='italic text-red-600'>First name must not be empty</p>}
            </div>
            <div className='flex flex-col items-center w-full my-4'>
                <label htmlFor="lastName">Last name:</label>
                <input className='w-full border-2 border-gray-400 p-2' type="text" name="lastName" id="lastName" value={lastName.value} onChange={lastName.onInputChangeHandler} onBlur={lastName.onInputBlurHandler}/>
                {lastName.hasError && <p className='italic text-red-600'>Last name must not be empty</p>}
            </div>
            <div className='flex flex-col items-center w-full my-4'>
                <label htmlFor="telephone">Phone number:</label>
                <input className='w-full border-2 border-gray-400 p-2' type="tel" name="telephone" id="telephone" value={phone.value} onChange={phone.onInputChangeHandler} onBlur={phone.onInputBlurHandler}/>
                {phone.hasError && <p className='italic text-red-600'>You must enter a valid phone number(8 digits)</p>}
            </div>
            <div className='flex flex-col items-center w-full my-4'>
                <label htmlFor="address">Address for delivery:</label>
                <textarea className='w-full border-2 border-gray-400 resize-none p-1' name="address" id="address" value={address.value} onChange={address.onInputChangeHandler} onBlur={address.onInputBlurHandler}/>
                {address.hasError && <p className='italic text-red-600'>You must enter a longer address</p>}
            </div>
        </form>
        <div className='flex w-full gap-x-2'>
            <button className='bg-red-500 rounded-lg  text-white text-lg py-4 mt-4 w-full md:w-2/4' onClick={onDecrement}>Go back</button>
            <button disabled={!formIsValid} className={`${formIsValid ? 'bg-green-500' : 'bg-gray-400'} rounded-lg text-white text-lg py-4 mt-4 w-full md:w-2/4`} onClick={onSubmitHandler}>Order now</button>
        </div>
    </>
  )
}

export default OrderForm