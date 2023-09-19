import {useState, useEffect, useCallback} from 'react'
import MenuGrid from '../components/menu/MenuGrid'

const Menu = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {

    try {
      const response = await fetch("https://pizza-project-daf9d-default-rtdb.firebaseio.com/products.json")

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      setProducts(data);

    }catch (error) {
      console.error(error.message);
    }

    setIsLoading(false);

  };
  
  useEffect(() => {
    fetchProducts();
  }, [])

  let content = isLoading ? (<h2 className='text-4xl text-white bold my-12'>Loading...</h2>) : (<MenuGrid products={products} />) 

  return (
    <div className='bg-red-500 text-center pt-[100px] pb-[13rem] px-[2rem]'>
      <h2 className='text-4xl text-white bold italic'>What are you craving for today?</h2>

      {content}

    </div >
  )
}

export default Menu