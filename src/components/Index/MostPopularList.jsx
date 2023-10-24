import FoodItem from '../FoodItem/FoodItem'
import popular1 from '../../assets/popular1.jpg'
import popular2 from '../../assets/popular2.jpg'
import popular3 from '../../assets/popular3.jpg'

const MostPopularList = () => {
  return (
    <section className='text-center bg-red-600 py-10'>
        <h2 className='font-bold text-2xl md:text-4xl italic text-white my-6'>Our most popular dishes</h2>
        <ul className='flex flex-col lg:flex-row'>
            <FoodItem image={popular1}/>
            <FoodItem image={popular2}/>
            <FoodItem image={popular3}/>
        </ul>
        <button className='border-2 border-slate-800 rounded-md my-8 p-4 w-4/5 sm:w-3/5 lg:w-2/4 max-w-2xl bg-slate-800 hover:bg-gray-700 text-white font-bold'>Check Menu</button>
    </section>
  )
}

export default MostPopularList
