import React, { useContext } from 'react'
import Header from '../Header/Header'
import { Outlet, useLocation } from 'react-router-dom'

import OrderSummary from '../OrderSummary/OrderSummary'
import { FunctionProvider } from '../Functions/Functions'
import Footer from '../Footer/Footer'

let Main =()=> {
    const location = useLocation();
    const isLoginOrSignupRoute = location.pathname === '/login' || location.pathname === '/signup'|| location.pathname === '/revieworder'||location.pathname === '/'||location.pathname==='/placeorder'||location.pathname==='/contactus';
    const{
      handleCategory }=useContext(FunctionProvider)
  return (
    <>
    <div > 
    <Header/>
   {isLoginOrSignupRoute&& 
   <div className='min-h-screen'> 
    <Outlet />
   </div>
   }
    {!isLoginOrSignupRoute && (
        <div className='grid lg:grid-cols-12 grid-cols-1 '>
          <div className='col-span-2'>
            <div className='mt-4 mx-6 lg:mb-0 mb-5 '>
            <div  className='lg:hidden block '>
            <OrderSummary />
          </div>
              <p className='mb-2'>Categories</p>
            <select onChange={(e)=>handleCategory(e.target.value)} className="select select-bordered w-full ">
  <option value='all'>All</option>
  <option value='electronics'>Electronics</option>
  <option value='jewelery'>Jewelery</option>
</select>

            </div>
          </div>
          <div className='col-span-8 border-r-2  border-slate-200'>
         
            <Outlet />
         
          </div>
          <div className='col-span-2  hidden lg:block'>
            <OrderSummary />
          </div>
        </div>
      )}

<Footer/>
      
    </div>
    </>
  )
}
export default  Main