import React from 'react'
import Header from '../Header/Header'
import { Outlet, useLocation } from 'react-router-dom'

import OrderSummary from '../OrderSummary/OrderSummary'

export default function Main() {
    const location = useLocation();
    const isLoginOrSignupRoute = location.pathname === '/login' || location.pathname === '/signup';
  
  return (
    <>
    <Header/>
   {isLoginOrSignupRoute&& <Outlet />}
    {!isLoginOrSignupRoute && (
        <div className='grid grid-cols-12'>
          <div className='col-span-2'>sdaljfdsaf</div>
          <div className='col-span-8'>
            <Outlet />
          </div>
          <div className='col-span-2'>
            <OrderSummary />
          </div>
        </div>
      )}


      
    </>
  )
}
