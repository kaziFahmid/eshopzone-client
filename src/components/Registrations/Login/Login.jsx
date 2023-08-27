import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import Swal from 'sweetalert2'
import data from './data.json' 
import Lottie from 'react-lottie'
let Login=()=> {
    const{signInUser}=useAuth()
    let navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let handleSubmit=(e)=>{
        e.preventDefault()
        let email=e.target.email.value;
        let password=e.target.password.value;
        e.target.reset()
        signInUser(email,password)
        .then((result) => {
            
            const user = result.user;
        
        Swal.fire('Login Done')
            navigate(from, { replace: true });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
        }


        const defaultOptions = {
          loop: true,
          autoplay: true, 
          animationData: data,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        };






  return (
    <>
    <div className='flex mt-28 lg:mt-0 lg:flex-row flex-col items-center justify-around min-h-screen'  >
      <div className="w-full max-w-sm mx-auto  ">
  <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded px-8 pt-6 pb-8 ">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email"name='email' placeholder="Email"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="******************"/>
      <Link to='/signup'>Signup</Link>
    </div>

    <div className="flex items-center justify-center">
      <button className="bg-yellow-300 hover:text-white border border-solid border-yellow-700  text-black px-12 hover:bg-yellow-600 py-2  rounded focus:outline-none focus:shadow-outline" type="submit">
       Log In
      </button>

    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>

<div>
<Lottie options={defaultOptions}
       
         
           />
</div>
    </div>
    
    
    
   
    
    
    
    
    
    
    
    
    </>
  )
}
export default Login