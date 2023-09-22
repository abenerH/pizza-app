import logo from '../../assets/pizza_logo.png'

const Login = () => {
  return (
    <div className='h-[100vh] bg-red-500 flex justify-center items-center'>
        <form className='flex flex-col items-center gap-3 w-4/5 lg:w-2/4 pb-[5rem] text-center'>
            <h2 className='text-xl font-bold text-white mb-2'>Login and start exploring our amazing membership benefits</h2>
            <img className='w-[80px]' src={logo} alt="Pizza logo" />
            <input className='p-4 border-2 border-black w-3/4 md:w-2/4' type="text" placeholder='Your email' />
            <input className='p-4 border-2 border-black w-3/4 md:w-2/4' type="password" placeholder='Your password'/>
            <div className='flex w-2/4 gap-2'>
                <input className='p-4 bg-slate-800 text-white w-full hover:bg-black hover:underline' type="submit" value="Login" onClick={(e) => {e.preventDefault()}}/>
                <input className='p-4 bg-white w-full hover:bg-gray-200 hover:underline' type="button" value="Register"/>
            </div>
        </form>
      </div>
  )
}

export default Login