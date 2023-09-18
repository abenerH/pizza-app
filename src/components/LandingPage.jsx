
import mobileBackground from '../assets/portrait_background.jpg';
import landscapeBackground from '../assets/landscape_background_cut.jpg';

const LandingPage = () => {
  return (
    <div className="h-[100vh] relative">
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10'>
          <h2 className='text-center text-white text-4xl md:text-5xl font-serif italic'>The best pizzas, the best prices, the fastest delivery...</h2>
        </div>
            <picture>
              <source media="(min-width:768px)" srcset={landscapeBackground}/>
              <img className='w-full h-full object-cover brightness-50 md:brightness-75' src={mobileBackground} loading='lazy'/>
            </picture>
    </div>
  )
}

export default LandingPage