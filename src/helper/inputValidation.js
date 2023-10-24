// Validations
export function validateName (value) {
  const onlyLettersRegex = new RegExp('^[a-zA-Z]*$', 'g')
  return value.trim() !== '' && onlyLettersRegex.test(value)
}

export function validatePhone (value) {
  const onlyNumbersRegex = /^[0-9]*$/g
  const formatted = value.replace(/\s+/g, '')
  return formatted.length >= 8 && onlyNumbersRegex.test(formatted)
}

export function validateEmail (value) {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  return value.trim() === '' || emailRegex.test(value)
}

export function validateAddress (value) {
  return value.trim().length > 8
}

export function validateTime (value) {
  return value.length > 0
}
