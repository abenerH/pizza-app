import { useState, useContext } from 'react'
import OrderContext from '../../store/OrderContext'
import { Link } from 'react-router-dom'
import OrdersGrid from './OrdersGrid'
import useHttp from '../../hooks/useHttp'
import Modal from '../../UI/Modal/Modal'
import Card from '../../UI/Card/Card'

const POST_URL = `${import.meta.env.VITE_FIREBASE_DATABASE_URL}/orders.json`

const Orders = () => {
  const [showModal, setShowModal] = useState(false)
  const orderContext = useContext(OrderContext)

  const { requestStatus, error, sendRequest: sendOrder } = useHttp()

  const items = orderContext.items
  const subtotal = +orderContext.total.toFixed(2)

  const submitOrderHandler = (order) => {
    const orderData = { items, ...order }

    setShowModal(true)

    sendOrder({
      url: POST_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: orderData
    }, (data) => {
      console.log(data.name)
    })

    // TODO: Empty context info here
    orderContext.emptyContext()
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
      <>
      <div className='min-h-[100vh] bg-red-500 text-center pt-[100px] pb-[13rem] px-[2rem] flex flex-col justify-center items-center'>

        {items.length === 0
          ? (
        <>
          <h2 className='text-xl text-white'>No items have been added! Check our menu and please yourself with a delicious pizza</h2>
          <Link to={'/menu'}><button className='bg-slate-800 text-white p-4 mt-4 hover:bg-slate-700 rounded-lg text-xl'>Check our menu</button></Link>
        </>)
          : (
          <OrdersGrid items={items} subtotal={subtotal} onOrder={submitOrderHandler}/>
            )}
      </div>

      {showModal && (
        <Modal onAction={closeModal}>
          <Card className='fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white w-2/5 h-1/4 p-8 text-center min-w-[3 00px] min-h-[300px] rounded-3xl overflow-hidden z-30'>
              <div className='flex flex-col items-center justify-evenly h-full'>
              {requestStatus === 'loading'
                ? (
                <h2>Sending your order</h2>
                  )
                : (
                <>
                {error
                  ? (
                  <h2>Something went wrong while sending order</h2>
                    )
                  : (
                  <h2 className='text-lg font-bold italic'>Order sent successfully!</h2>
                    )}
                <button className='bg-red-400 text-white p-4 w-2/4 rounded-md' onClick={closeModal}> Close </button>
                </>
                  )}
              </div>
        </Card>
        </Modal>
      )}
      </>
  )
}

export default Orders
