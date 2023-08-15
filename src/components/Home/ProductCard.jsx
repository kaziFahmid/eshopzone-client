import React from 'react'
import { BsFillCartFill } from 'react-icons/bs';

import useAuth from '../hooks/useAuth';
import axios from 'axios';
import useOrderLists from '../hooks/useOrderLists';
import { Link } from 'react-router-dom';
let ProductCard=({_id,image,
    title,
    category,
    price,
    description})=>{
        const{user}=useAuth()
        const [refetch, orderlists]=useOrderLists()
        let handleAddToCart=(product)=>{
            axios.post('/orderlists',product)
            .then(res=>{
              if(res.modifiedCount>0||res.insertedId){
                refetch()
              }
            })

        }

  return (
    <div className=" border-b-2 bg-white border-slate-400 justify-center items-center gap-5  grid grid-cols-1 py-5 lg:grid-cols-12 px-6">
    {/* Car Image */}
      <div className='lg:col-span-4'> 

 <div> 
    <img
      className="  img-fluid h-48"
      src={image} 
      alt="Car"
    />
    </div>

      </div>

    {/* Car Details */}
    <div className="  lg:col-span-8">
      <div >
      <h2 className="text-base font-semibold mb-2">{title}</h2>
      <p className='text-sm' >category:<span className='ms-2'>{category}</span></p>
      <div className="rating mt-3 ">
<input type="radio" name="rating-1" className="mask mask-star bg-yellow-500 " />
<input type="radio" name="rating-1" className="mask mask-star bg-yellow-500"  />
<input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
<input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
<input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
</div>
<div>
  <h3 className='text-base text-orange-700'>${price} </h3>
</div>
<p className='text-xs mt-3'>{description}</p>
<div> 

  {!user?<Link to='/login'><button className='text-black bg-yellow-300 hover:text-white text-xs  py-2 rounded-md px-11 mt-4 flex justify-center items-center gap-1 border border-solid border-yellow-700'><BsFillCartFill/>Add To Cart</button></Link>:<button onClick={()=>{handleAddToCart({
          productId: _id, 
          image,
          title,
          category,
          price,
          email: user?.email,
          description,
        })}} className='text-black bg-yellow-300 hover:text-white text-xs  py-2 rounded-md px-11 mt-4 flex justify-center items-center gap-1 border border-solid border-yellow-700'><BsFillCartFill/>Add To Cart</button>}

</div>

          
  </div>
    </div>




  </div>
  )
}
export default ProductCard
 