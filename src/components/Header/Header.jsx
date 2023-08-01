import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import useOrderLists from '../hooks/useOrderLists'
export default function Header() {
    const {user,logOut}=useAuth()
    const [refetch, orderlists]=useOrderLists()
    let qunatityValue=0
  for(let qunatityNum of orderlists){
    qunatityValue+=qunatityNum.quantity
  }

  return (
    <>
   <div className='bg-white'>
    <h1 className='text-center text-black text-5xl py-6 '>EShopZone</h1>
    <div>
     <ul className='flex justify-end '> 
      {user?.email ?<li><span className='bg-black text-white px-6 py-1' onClick={logOut}>Logout</span></li>: <li><Link to='/login'><span className='bg-black text-white px-6 py-1'>Login</span></Link></li>} 
        {!user?.email&&<li><Link to='/signup'><span className='bg-black text-white px-6 py-1'>Signup</span></Link></li>}
     </ul>
    </div>
   <div className="navbar bg-neutral text-neutral-content px-16 py-4">
<div className='w-full'>
<input type='text' className=' w-full input input-bordered'/>  
    </div>  
  <div>
     <FaShoppingCart className='text-4xl ms-2 text-white'/>
     <h3 className='text-orange-600 text-3xl ms-5'>{qunatityValue}</h3>   
</div>        
</div>

   </div>
    </>
  )
}
