import { useState } from 'react'

const useInput = (validateData) => {
  const [enteredValue, setEnteredValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)

  const enteredValueIsValid = validateData(enteredValue)
  const hasError = !enteredValueIsValid && isTouched === true

  const onInputChangeHandler = (event) => {
    setEnteredValue(event.target.value)
  }

  const onInputBlurHandler = () => {
    setIsTouched(true)
  }

  const reset = () => {
    setEnteredValue('')
    setIsTouched(false)
  }

  return {
    value: enteredValue,
    isValid: enteredValueIsValid,
    hasError,
    onInputChangeHandler,
    onInputBlurHandler,
    reset
  }
}

export default useInput
