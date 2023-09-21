import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Index from './routes/Index.jsx'
import Menu from './routes/Menu.jsx'
import Orders from './routes/Orders.jsx'
import Login from './routes/Login.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import OrderContextProvider from './store/OrderContextProvider.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/myorder",
        element: <Orders />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <OrderContextProvider>
      <RouterProvider router={router} />
    </OrderContextProvider>
  </React.StrictMode>,
)
