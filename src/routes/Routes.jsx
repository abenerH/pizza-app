import Error from '../components/Error/Error'
import Index from '../components/Index/Index'
import Login from '../components/Login/Login'
import Menu from '../components/Menu/Menu'
import Orders from '../components/Orders/Orders'

export function ErrorPage () {
  return <Error />
}

export function IndexRoute () {
  return <Index />
}

export function LoginRoute () {
  return <Login />
}

export function OrdersRoute () {
  return <Orders />
}

export function MenuRoute () {
  return <Menu />
}
