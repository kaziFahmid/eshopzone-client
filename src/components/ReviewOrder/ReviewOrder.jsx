import React from 'react'
import useOrderLists from '../hooks/useOrderLists'
import OrderSummary from '../OrderSummary/OrderSummary'
import { BsTrashFill } from 'react-icons/bs';
import axios from 'axios';
const ReviewOrder = () => {
    const[refetch,orderlists]=useOrderLists()
let handleDelete=(_id)=>{
 axios.delete(`/orderlists/${_id}`)
 .then(res=>{
  if(res.deletedCount>0){
    refetch()
  }
 })
}
 
let handleIncrease=(_id)=>{
axios.patch(`/orderlists/${_id}`,{increament:1})
.then((res)=>{
  if(res.modifiedCount>0){
    refetch()
  }
})
}


let handleDecrease=(_id)=>{
  axios.patch(`/orderlists/${_id}`,{decrease:1})
  .then((res)=>{
    if(res.modifiedCount>0){
      refetch()
    }
  })
  }









  return (
    <div className='grid lg:grid-cols-12 grid-cols-1 '>
      <div className='lg:col-span-9 border-r-2 border-slate-200'>
        <div className='max-w-3xl  mx-auto'>
        
        {orderlists.map((orderlist)=>{return<div key={orderlist._id} className="w-full border-b-2 border-slate-200  mt-5">
 
 <div className="card-body">
<div className="card-actions justify-end">

<button className='text-black bg-yellow-300 hover:text-white text-xs  py-2 rounded-md px-11 mt-4 flex justify-center items-center gap-1 border border-solid border-yellow-700 mb-5' onClick={()=>handleDelete(orderlist._id)}><BsTrashFill/>Remove</button>
<div> 

</div>


</div>

<div className='flex justify-center md:flex-row flex-col items-center gap-5 '> 
<div className="avatar">
  <div className="w-28 rounded">
    <img src={orderlist.image} className='img-fluid' />
  </div>
</div>

<div >
<p className='text-sm'>category {orderlist.category}</p>
<h1 className='mt-1'>{orderlist.title}</h1>
<h3 className='mt-4'>Quantity : {orderlist.quantity}</h3>

</div>


<div className='flex items-center justify-center'> 
  <button className='px-3 py-2 rounded bg-slate-200 border border-solid border-slate-700  text-base hover:bg-slate-300 hover:text-white' onClick={()=>handleDecrease(orderlist._id)}>-</button>
  <input type='number' value={orderlist.quantity} className='w-14 text-center'/>
  <button className="px-3 py-2 rounded bg-slate-200 border border-solid border-slate-700  text-base hover:bg-slate-300 hover:text-white" onClick={()=>handleIncrease(orderlist._id)} >+</button>
  </div>





</div>
</div>




</div>})}     
        </div>
      </div>
      <div className='lg:col-span-3 '>
      <OrderSummary />
      </div>
    </div>
  )
}

export default ReviewOrder
