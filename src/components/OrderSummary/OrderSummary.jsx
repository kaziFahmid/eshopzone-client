import React, { useState } from 'react'
import useOrderLists from '../hooks/useOrderLists'
import { Link, useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import useAuth from '../hooks/useAuth';
import axios from 'axios';


 let OrderSummary =()=> {
  const location = useLocation();
const{user}=useAuth()

  const { data: products = [] } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch(`https://eshopzone-server.vercel.app/products`)
      return res.json()
    },
  })
  const [refetch, orderlists]=useOrderLists()
const[shippingCharge,setShippingCharge]=useState(50)
let isLocationPath=location.pathname === '/revieworder'
  let totalItemsPrice=0
  for(let orders of orderlists){
      let quantity=orders.quantity
      let priceValue=orders.price
      totalItemsPrice+=priceValue*quantity
  }
  let qunatityValue=0
  for(let qunatityNum of orderlists){
    qunatityValue+=qunatityNum.quantity
  }
let handleDelete=()=>{
  axios.delete('/orderlists')
  .then((res)=>{
    if(res.deletedCount>0){
      refetch()
    }
  })
}

  
  return (
    <div className='px-2 mt-8 sticky top-0' >
      <h2 className='text-2xl text-black text-center font-semibold mt-2'>Order Summary</h2>
      <ul className='mt-5'>
        <li className='text-center'>{isLocationPath&&'Items ordered: ' ||'Items count: '}{isLocationPath&& orderlists.length ||qunatityValue}</li>
        <li className='flex justify-between items-center mt-2'> <span className='text-sm'>Items</span><span className='text-sm'>${totalItemsPrice}</span></li>
        <li className='flex justify-between items-center mt-2'> <span className='text-sm'>Shipping Charge</span><span className='text-sm'>${shippingCharge}</span></li>
        <li className='flex justify-between items-center'> <span className='text-sm mt-2'>Tax</span><span className='text-sm'>${totalItemsPrice*7/100}(7%)</span></li>
        <li className='text-lg font-semibold text-orange-700' >Order Summary: ${orderlists.length===0&&'0'||`${Math.ceil(totalItemsPrice+shippingCharge+totalItemsPrice*7/100)}`}</li>
      </ul>
    <div className='flex justify-center'>
{isLocationPath? <button className='text-black bg-yellow-300 hover:text-white text-xs  py-2 rounded-md px-11 mt-4 flex justify-center items-center gap-1 border border-solid border-yellow-700'onClick={handleDelete} disabled={orderlists.length===0&&true}><Link to={`${!user?'/login':'/placeorder'}`}>Place Order</Link></button> : <Link to={`${!user?'/login':'/revieworder'}`}><button className='text-black bg-yellow-300 hover:text-white text-xs  py-2 rounded-md px-11 mt-4 flex justify-center items-center gap-1 border border-solid border-yellow-700'>Review Order</button> </Link>} 

    </div>
    </div>
  )
}
export default OrderSummary