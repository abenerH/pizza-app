export default function getHours (hours = 1) {
  const newHour = new Date(Date.now() + hours * 60 * 60 * 1000) // This will return an hour from now
  return `${newHour.getHours().toString()}:${newHour.getMinutes().toString().padStart(2, '0')}`
}
