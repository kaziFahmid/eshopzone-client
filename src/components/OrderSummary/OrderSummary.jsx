import React, { useState } from 'react'
import useOrderLists from '../hooks/useOrderLists'

export default function OrderSummary() {
  const [refetch, orderlists]=useOrderLists()
const[shippingCharge,setShippingCharge]=useState(50)

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

  return (
    <div className='px-2 mt-8 ' >
      <h2 className='text-2xl text-black text-center font-semibold mt-2'>Order Summary</h2>
      <ul className='mt-5'>
        <li className='text-center'>Items count:{qunatityValue}</li>
        <li className='flex justify-between items-center mt-2'> <span className='text-sm'>Items</span><span className='text-sm'>${totalItemsPrice}</span></li>
        <li className='flex justify-between items-center mt-2'> <span className='text-sm'>Shipping Charge</span><span className='text-sm'>${shippingCharge}</span></li>
        <li className='flex justify-between items-center'> <span className='text-sm mt-2'>Tax</span><span className='text-sm'>${totalItemsPrice*7/100}(7%)</span></li>
        <li className='text-xl font-semibold text-orange-700' >Order Summary: ${Math.ceil(totalItemsPrice+shippingCharge+totalItemsPrice*7/100)} </li>
      </ul>
    <div className='flex justify-center'>
    <button className='text-black bg-yellow-300 hover:text-white text-xs  py-2 rounded-md px-11 mt-4 flex justify-center items-center gap-1'>Review Order</button>

    </div>
    </div>
  )
}
