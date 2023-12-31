import React, { useEffect, useState } from 'react'
import Banner from './Banner/Banner'
import axios from 'axios'
import useProducts from '../hooks/useProducts'
import { Link } from 'react-router-dom'
import OurNews from '../OurNews/OurNews'
import ElectronicsProducts from '../ElectronicsProducts/ElectronicsProducts'
import Question from '../Question/Question'
import Subscribe from '../Subscribe/Subscribe'
import Testimonial from '../Testimonial/Testimonial'

let Home=()=> {
  const[refetch, products]=useProducts()
  return (
    <>
<div className='banner-area ' >

  <Banner/>




</div>


<div className='grid  mt-9   lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-6xl mx-auto gap-9'>
{products.map((card,index)=> <div key={index} className="relative m-10 mx-auto flex w-full  flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md h-96">
  <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
    <img className=" w-full object-contain" src={card.image} />
    <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
  </a>
  <div className="mt-4 px-5 pb-5">
    <a href="#">
      <h5 className="text-lg tracking-tight text-slate-900">{card.title}</h5>
    </a>
    <div className="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span className="text-3xl font-bold text-slate-900">${card.price}</span>
        <span className="text-sm text-slate-900 line-through">$699</span>
      </p>
      <div className="flex items-center">
        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
      </div>
    </div>
    <Link to="/products" className="flex items-center justify-center rounded-md bg-yellow-300 px-5 py-2.5 text-center text-sm font-medium text-black hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 ">
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Add to cart</Link >
  </div>
</div>
                           







)}
</div>

<section className='mt-28'>
  <div className='ms-14'>
    <span className='text-md'>Featured</span>
    <h2 className='text-5xl font-semibold'>New Arrival</h2>
  </div>

  <div className='grid lg:grid-cols-2 gap-11 grid-cols-1 mt-9 max-w-6xl mx-auto '>
    <div className=' bg-cover bg-center bg-no-repeat  bg-[url(https://i.ibb.co/bWL2yNC/Frame-684.png)] pt-96 px-12 pb-24 '>
      <div className='text-white'>
      <h3>PlayStation 5</h3>
  <p>Black and White version of the PS5 coming out on sale.</p>
      </div>
<div>
 
</div>
    </div>


    <div >
    <div className=' bg-cover bg-center bg-no-repeat  bg-[url(https://i.ibb.co/bWL2yNC/Frame-684.png)] pt-96 px-12 pb-24 '>
      <div className='text-white'>
      <h3>PlayStation 5</h3>
  <p>Black and White version of the PS5 coming out on sale.</p>
      </div>
<div>
 
</div>
    </div>

      
      
    </div>





  </div>



</section>

<OurNews/>
<ElectronicsProducts/>
<Question/>
<Subscribe/>
<Testimonial/>
    </>
  )
}
export default Home