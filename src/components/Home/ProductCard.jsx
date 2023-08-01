import React from 'react'
import { BsFillCartFill } from 'react-icons/bs';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import useOrderLists from '../hooks/useOrderLists';
export default function ProductCard({_id,image,
    title,
    category,
    price,
    description}){
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
    <div className="bg-white border-b-2 border-slate-400 justify-center items-center  grid grid-cols-1 py-5 lg:grid-cols-12">
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
      <div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p >category:<span className='ms-2'>{category}</span></p>
      <div className="rating mt-3 ">
<input type="radio" name="rating-1" className="mask mask-star bg-yellow-500 " />
<input type="radio" name="rating-1" className="mask mask-star bg-yellow-500"  />
<input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
<input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
<input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
</div>
<div>
  <h3 className='text-3xl text-orange-700'>${price} </h3>
</div>
<p className='text-sm mt-3'>{description}</p>
<div> 
  <button onClick={()=>{handleAddToCart({
          productId: _id, // Make sure this matches the field name in the server
          image,
          title,
          category,
          price,
          email: user?.email,
          description,
        })}} className='text-black bg-yellow-300 hover:text-white text-xs  py-2 rounded-md px-11 mt-4 flex justify-center items-center gap-1'><BsFillCartFill/>Add To Cart</button>
</div>

          
  </div>
    </div>




  </div>
  )
}
