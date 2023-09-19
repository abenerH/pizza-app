import MenuItem from './MenuItem'

const MenuGrid = ({products}) => {

  const content = products.map((element, index) => <MenuItem key={index} product={element} />)

  return (
    <>
      {products.length === 0 ? <h2 className='text-4xl text-white bold my-12'>No products were found</h2> : <div className='w-full grid lg:grid-cols-2 gap-2 my-8 mx-auto'>{content}</div>}
    </>
  )
  
}

export default MenuGrid