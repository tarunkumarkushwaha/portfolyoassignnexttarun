import React, { forwardRef, useRef } from 'react'

const Testimonials = forwardRef((prop, ref) => {
  let experiencedata = prop.data.user.timeline
  const revealElement1 = useRef();
  let testimonialData = prop.data.user.testimonials;

  return (
    <>
      <section ref={ref} className='md:ml-1 ml-40'>
        <div className="flex-col h3">
          <h1 className="sub-title">Testimonials</h1>
        </div>
        <div className="testimonial-card ml-0 bg-gray-800">{testimonialData.map((item, index) => (

          <div key={index} className="test-box p-8 min-w-[300px] min-h-[400px]">
            <div className='flex justify-center'>
              <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={item.image.url} alt={item.image.url} />
            </div>
            <div className="blog-text">
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.name}</h5>
              <p className='flex justify-center text-gray-400 text-center'>{item.review}</p>
            </div>
          </div>
        ))}</div>


        <div ref={revealElement1} className="flex-col h3">
          <h1 className="sub-title" ref={revealElement1}>Experience</h1>
        </div>

        <div className="flex-row flex-wrap justify-center ml-14">
          {experiencedata.map((item, i) => (
            <div key={i} className="timeline-label flex-col justify-center min-w-[300px] min-h-[400px]">
              <h1 className='flex text-3xl p-2 font-bold justify-center mb-2'>{item.company_name}</h1>
              <h2 className='flex text-2xl p-2 font-bold justify-center mb-2'>{item.jobLocation}</h2>
              <h2 className='flex justify-center'>{item.jobTitle}</h2>
              <h2 className='flex justify-center'>{item.startDate.split("T")[0]} -- {item.endDate.split("T")[0]}</h2>
              <p className='flex justify-center text-center'> {item.summary}</p>
            </div>
          ))}
        </div>

      </section>
    </>
  )
})

export default Testimonials