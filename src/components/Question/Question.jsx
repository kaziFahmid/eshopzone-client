import React from 'react'

const Question = () => {
  return (
    <section className='grid p-8 lg:grid-cols-2 grid-cols-1 max-w-6xl mx-auto bg-slate-200 mt-32'>
      <div>
        <div  className='mt-12'>
            <div>
                <h1 className='font-bold text-3xl'>Get Questions We have got answers</h1>
            </div>
        </div>
      </div>
      <div>
      <div className="collapse collapse-arrow bg-white mt-6">
  <input type="radio" name="my-accordion-2"  /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-white mt-6">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-white mt-6">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>


  
</div>
<div className="collapse collapse-arrow bg-white  mt-6">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>


  
</div>
      </div>

    </section>
  )
}

export default Question
