import React from 'react'


import useProducts from '../hooks/useProducts';
import ProductCard from '../Home/ProductCard';
const Products = () => {
    const [refetch, products]=useProducts()
  return (
    <>
    <div className=' flex justify-center flex-col '>
    {products.map((product)=> <ProductCard key={product._id} {...product}/> )}

    </div>
    </>
  )
}

export default Products
