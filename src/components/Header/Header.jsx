import React, { useContext, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import useOrderLists from '../hooks/useOrderLists'
import { FunctionProvider } from '../Functions/Functions'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'
let Header=()=> {
    const {user,logOut}=useAuth()
 const[isTrue,setIsTrue]=useState(false)
    const [refetch, orderlists]=useOrderLists()
    const{ searchValue,
      handleSearch}=useContext(FunctionProvider)

    let qunatityValue=0
  for(let qunatityNum of orderlists){
    qunatityValue+=qunatityNum.quantity
  }



  return (
    <>
  <nav className=' z-50'>
  <div >
  
  <div className="navbar bg-neutral fiex text-neutral-content flex justify-center gap-4 items-center lg:flex-row flex-col py-4 ">
     <div>
       <img src='https://i.ibb.co/m4gJVs0/EShop-Zone-8-3-2023.png' className='img-fluid h-10' />
     </div>
 <div className='w-9/12 relative'>
 <input type='search' onChange={(e)=>
    {handleSearch(e.target.value)}} value={searchValue} className=' w-full input input-bordered text-black '/>
    <button className='bg-yellow-500 absolute text-black btn right-0'><FaSearch/></button>  
     </div>  
     
   <div>
 <Link to='/revieworder'>     <FaShoppingCart className='text-4xl  text-white'/></Link>
      <h3 className='text-yellow-600 text-3xl ms-2  font-semibold'>{qunatityValue}</h3>   
 </div>        
 </div>
 
    </div>
    <div className='bg-slate-700 py-4 '>
  <div className={`text-end  lg:hidden`} onClick={()=>setIsTrue(!isTrue)}>
  <button className='btn bg-transparent me-4'>{isTrue?<ImCross className='text-white text-xl '/>:<GiHamburgerMenu className='text-white text-xl '/>}</button>
  </div>
      <ul className={`lg:flex ${isTrue?'flex':"hidden"}  justify-center items-center flex-col    lg:flex-row  gap-8 `}> 
      <li><Link to='/'><span className=' text-white   hover:bg-slate-400  p-3'>Home</span></Link></li>
      <li><Link to='/products'><span className=' text-white   hover:bg-slate-400  p-3'>Products</span></Link></li>
    {user&&  <li><Link to='/revieworder'><span className='hover:bg-slate-500  text-white p-3  '>Review Order</span></Link></li>}
       {user?.email ?<li><span className='hover:bg-slate-400  p-3  text-white  ' onClick={logOut}>Logout</span></li>: <li><Link to='/login'><span className=' text-white p-3  '>Login</span></Link></li>} 
         {!user?.email&&<li><Link to='/signup'><span className='hover:bg-slate-400 p-3  text-white  '>Signup</span></Link></li>}
      </ul>
     </div>
  </nav>
    </>
  )
}
export default  Header