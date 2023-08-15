import axios from 'axios';
import { updateProfile } from 'firebase/auth';
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

let Signup=()=> {
    const{createUser}=useAuth()
    let navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
   
    let handleSubmit=(e)=>{
       
        e.preventDefault()
 
let username=e.target.username.value
let email=e.target.email.value
let password=e.target.password.value

createUser(email,password)
.then((result) => {
    //
    const user = result.user;
    console.log(user)
    updateProfile(user, {
        displayName: username, photoURL: ''
      }).then(() => {
        axios.post(`/allusers`,{email:user.email,username:user.displayName})
        .then((res)=>{
            if(res.insertedId){
                Swal.fire(` ${user.displayName}Signup  Successfull!`)
            }
            navigate(from, { replace: true });
        })
      }).catch((error) => {
        
      });
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

    }
  return (
    <div >
    <div className="w-full max-w-sm mx-auto mt-6">
<form  onSubmit={handleSubmit} className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
<div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
      Username
    </label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" name='username' placeholder="Username" required/>
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
      Email
    </label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name='email' placeholder="Email" required/>
  </div>
  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
      Password
    </label>
    <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name='password' type="password" placeholder="******************" required/>
    <Link to='/login'>Login</Link>
  </div>
  <div className="flex items-center justify-center">
    <button className="bg-yellow-300 hover:text-white border border-solid border-yellow-700  text-black px-12 hover:bg-yellow-600 py-2  rounded focus:outline-none focus:shadow-outline"  type="submit">
     Sign Up
    </button>
   
  </div>
</form>
<p className="text-center text-gray-500 text-xs">
  &copy;2020 Acme Corp. All rights reserved.
</p>
</div>
  </div>
  )
}
export default Signup