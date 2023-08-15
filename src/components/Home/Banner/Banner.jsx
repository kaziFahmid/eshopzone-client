import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
const Banner = () => {
  return (
    <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
<div className='  bg-no-repeat   bg-cover bg-center py-52 bg-[url(https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80)]'>
    <div className='text-center '>
        <h1 className='text-white font-bold text-7xl '>Buy One Get One Free</h1>
        <p className='text-white mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rerum, maiores eligendi repellendus expedita placeat pariatur cumque praesentium nostrum quisquam delectus est laudantium voluptas id. Ratione rem fugiat qui excepturi?</p>
    </div>

</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' text-center bg-no-repeat  py-52   bg-cover bg-center  bg-[url(https://static.standard.co.uk/2022/05/05/11/newFile-9.jpg?width=1200)]'>
        <div className='text-center'>
        <h1 className='text-white font-bold text-7xl '>Buy One Get One Free</h1>
        <p className='mt-5 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rerum, maiores eligendi repellendus expedita placeat pariatur cumque praesentium nostrum quisquam delectus est laudantium voluptas id. Ratione rem fugiat qui excepturi?</p>
    </div>
</div>
        </SwiperSlide>

        <SwiperSlide> 
        <div className=' text-center  bg-no-repeat py-52 bg-cover bg-center  bg-[url(https://www.love-your-home.co.uk/media/catalog/product/cache/becc11b8c68583c761d59f399a3e3771/a/n/angelina_image_1.jpg)]'>
        <div className='text-center'>
        <h1 className='text-white font-bold text-7xl '>Buy One Get One Free</h1>
        <p className='text-white mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rerum, maiores eligendi repellendus expedita placeat pariatur cumque praesentium nostrum quisquam delectus est laudantium voluptas id. Ratione rem fugiat qui excepturi?</p>
    </div>
</div>
        </SwiperSlide>
        
      </Swiper>
    </>
  )
}

export default Banner
