import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import OrderContextProvider from './store/OrderContextProvider.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// ROUTES
import {
  MenuRoute,
  LoginRoute,
  OrdersRoute,
  IndexRoute,
  ErrorPage
}
  from './routes/Routes.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <IndexRoute />
      },
      {
        path: '/menu',
        element: <MenuRoute />
      },
      {
        path: '/myorder',
        element: <OrdersRoute />
      },
      {
        path: '/login',
        element: <LoginRoute />
      }
    ],
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <OrderContextProvider>
      <RouterProvider router={router} />
    </OrderContextProvider>
  </React.StrictMode>
)
