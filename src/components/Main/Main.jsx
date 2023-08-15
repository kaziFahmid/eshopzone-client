import React, { useContext } from 'react'
import Header from '../Header/Header'
import { Outlet, useLocation } from 'react-router-dom'

import OrderSummary from '../OrderSummary/OrderSummary'
import { FunctionProvider } from '../Functions/Functions'
import Footer from '../Footer/Footer'

let Main =()=> {
    const location = useLocation();
    const isLoginOrSignupRoute = location.pathname === '/login' || location.pathname === '/signup'|| location.pathname === '/revieworder'||location.pathname === '/';
    const{
      handleCategory }=useContext(FunctionProvider)
  return (
    <>
    <Header/>
   {isLoginOrSignupRoute&& <Outlet />}
    {!isLoginOrSignupRoute && (
        <div className='grid lg:grid-cols-12 grid-cols-1'>
          <div className='col-span-2'>
            <div className='mt-4 mx-6 lg:mb-0 mb-5'>
              <p className='mb-2'>Categories</p>
            <select onChange={(e)=>handleCategory(e.target.value)} className="select select-bordered w-full ">
  <option value='all'>All</option>
  <option value='electronics'>Electronics</option>
  <option value='jewelery'>Jewelery</option>
</select>
            </div>
          </div>
          <div className='col-span-8 border-r-2 border-slate-200'>
            <Outlet />
          </div>
          <div className='col-span-2'>
            <OrderSummary />
          </div>
        </div>
      )}

<Footer/>
      
    </>
  )
}
export default  Main