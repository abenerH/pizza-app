import useHttp from '../hooks/useHttp'

// Send order to Firebase Realtime Database
export function postOrder (order) {
  const { sendRequest: sendOrder } = useHttp()

  sendOrder({ url: 'https://pizza-project-daf9d-default-rtdb.firebaseio.com/orders.json' })
}
