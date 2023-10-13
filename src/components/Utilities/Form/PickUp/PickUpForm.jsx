import { useState } from 'react';
import useInput from '../../../../hooks/use-input';
import { validateName, validatePhone, validateEmail } from '../../../../helper/inputValidation';
import { order_options } from '../../../../helper/dictionary'

const getFormattedTime = () => {
    const thirtyMinutes = new Date(Date.now()+60*60000);
    return `${thirtyMinutes.getHours().toString()}:${thirtyMinutes.getMinutes().toString().padStart(2, '0')}`;
}


const PickUpForm = ({onSubmit, onDecrement}) => {

    const [time, setTime] = useState({
        time: getFormattedTime(),
        isValid: true,
    });

    const firstName = useInput(validateName);
    const lastName = useInput(validateName);
    const phone = useInput(validatePhone);
    const cookingGuidelines = useInput(() => {return true})
    const email = useInput(validateEmail);

    const cleanInputs = () => {
        firstName.reset();
        lastName.reset();
        phone.reset();
        email.reset();
        cookingGuidelines.reset();
        setTime({
            time: getFormattedTime(),
            isValid: true,
        });
    }

    const validateTime = value => value.length > 0;

    const onTimeChanged = (e) => { 

        const enteredTime = e.target.value;

        if(validateTime(enteredTime)){
            const splittedTime = enteredTime.split(':');
            const formattedTime = `${splittedTime[0]}:${splittedTime[1]}`
            setTime({
                ...time,
                time: formattedTime,
            })
        }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const order = {
            client: {
                firstName: firstName.value,
                lastName: lastName.value,
                phone: phone.value,
                email: email.value,
            },
            guidelines: {
                cooking: cookingGuidelines.value,
            },
            type: order_options.PICKUP,
            requestedAt: time.time,
        }

        onSubmit(order);
        cleanInputs();
    }

    const formIsValid = firstName.isValid && lastName.isValid && phone.isValid && email.isValid && time.isValid;;

        return(
        <form className='w-full' onSubmit={onSubmitHandler}>
        <h3>We just need some info for the time you come pick up your order</h3>
        <div className='flex flex-col gap-2 items-center md:items-start my-4'>
            <label htmlFor="firstName">First name:</label>
            <input className={`w-full border-2 p-2 ${firstName.hasError ? 'border-red-600 bg-red-100' : 'border-gray-400'} `} type="text" name="firstName" id="firstName" value={firstName.value} onChange={firstName.onInputChangeHandler} onBlur={firstName.onInputBlurHandler}/>
            {firstName.hasError && <p className='italic text-red-600'>First name must not be empty or contain non alphabetic characters</p>}
        </div>
        <div className='flex flex-col gap-2 items-center md:items-start w-full my-4'>
            <label htmlFor="lastName">Last name:</label>
            <input className={`w-full border-2 p-2 ${lastName.hasError ? 'border-red-600 bg-red-100' : 'border-gray-400'} `} type="text" name="lastName" id="lastName" value={lastName.value} onChange={lastName.onInputChangeHandler} onBlur={lastName.onInputBlurHandler}/>
            {lastName.hasError && <p className='italic text-red-600'>Last name must not be empty or contain non alphabetic characters</p>}
        </div>
        <div className='flex flex-col gap-2 items-center md:items-start w-full my-4'>
            <label htmlFor="telephone">Phone number:</label>
            <input className={`w-full border-2 p-2 ${phone.hasError ? 'border-red-600 bg-red-100' : 'border-gray-400'}`} type="tel" name="telephone" id="telephone" value={phone.value} onChange={phone.onInputChangeHandler} onBlur={phone.onInputBlurHandler}/>
            {phone.hasError && <p className='italic text-red-600'>You must enter a valid phone number(8 digits)</p>}
        </div>
        <div className='flex flex-col gap-2 items-center md:items-start w-full my-4'>
            <div>
                <label htmlFor="email">Email: (Optional)</label>
                <span className='italic text-gray-600 ml-2'>Get our latest offers at your personal inbox !</span>
            </div>
            <input className={`w-full border-2 p-2 ${email.hasError ? 'border-red-600 bg-red-100' : 'border-gray-400'}`} type="email" name="telephone" id="telephone" value={email.value} onChange={email.onInputChangeHandler} onBlur={email.onInputBlurHandler}/>
            {email.hasError && <p className='italic text-red-600'>You must enter a valid email or leave this empty</p>}
        </div>
        <div className='flex flex-col gap-2 items-center md:items-start w-full my-4'>
            <label htmlFor="cooking-guidelines">Cooking guidelines: (Optional)</label>
            <textarea className='w-full border-2 p-1 border-gray-400 resize-none' name="cookingGuidelines" id="cookingGuidelines" value={cookingGuidelines.value} maxLength={200} onChange={cookingGuidelines.onInputChangeHandler}/>
        </div>
        <div className='flex flex-col gap-2 items-center md:items-start w-full my-4'>
            <div className="m-auto">
                <label htmlFor="time">Pick Up time:</label>
                <span className='italic text-gray-600 ml-2'>(Please note that orders takes us normally 30 to 60 minutes)</span>
            </div>
                <div className='flex flex-col justify-center items-center w-full'>
                    <input className={`w-2/5 border-2 px-8 py-2 text-center ${!time.isValid ? 'border-red-600 bg-red-100' : 'border-gray-400'}`} id='time' name='time' type="time" onChange={onTimeChanged} value={time.time}/>
                    {!time.isValid && <p className='italic text-red-600'>You must enter a valid time</p>}
                </div>
        </div>
        <div className='flex w-full gap-x-2'>
            <button type='button' className='bg-red-500 rounded-lg  text-white text-lg py-4 mt-4 w-full md:w-2/4' onClick={onDecrement}>Go back</button>
            <button type='submit' disabled={!formIsValid} className={`${formIsValid ? 'bg-green-500' : 'bg-gray-400 cursor-not-allowed'} rounded-lg text-white text-lg py-4 mt-4 w-full md:w-2/4`}>Order now</button>
        </div>
    </form>
    )
}

export default PickUpForm;