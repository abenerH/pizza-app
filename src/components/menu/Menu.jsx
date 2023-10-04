import {useState, useEffect} from 'react'
import MenuGrid from './MenuGrid';
import useHttp from '../hooks/useHttp';

const Menu = () => {
  const [products, setProducts] = useState([]);

  const {isLoading, error, sendRequest: fetchProducts} = useHttp();

  useEffect(() => {
    const loadProducts = data => {
      const loadedProducts = [];
  
      for (const productId in data) {
        loadedProducts.push({
          id: productId,
          title: data[productId].title,
          description: data[productId].description,
          price: data[productId].price,
        });
      }
      setProducts(data);
    }
    fetchProducts({url: "https://pizza-project-daf9d-default-rtdb.firebaseio.com/products.json"}, loadProducts);
  
  }, [fetchProducts])

  let content = isLoading ? (<h2 className='absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] text-4xl text-white bold my-12'>Loading...</h2>) : (<MenuGrid products={products} />) 

  return (
    <div className='min-h-[100vh] bg-red-500 text-center pt-[100px] pb-[13rem] box-border px-2 relative'>

    {
       error ? <h2 className='absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] text-2xl text-white bold'>{error}</h2> : <>
             <h2 className='text-4xl text-white bold italic'>What are you craving for today?</h2>
             {content}
       </>
    }

    </div >
  )
}

export default Menu