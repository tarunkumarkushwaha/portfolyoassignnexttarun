"use client"
import React, { forwardRef, useEffect, useRef } from 'react'

const Testimonials = forwardRef((prop, ref) => {
  let experiencedata = prop.data.user.timeline
  let testimonialData = prop.data.user.testimonials;
  
  const revealElement1 = useRef();
  const revealElement2 = useRef();
  const revealElement3 = useRef();

  const revealElements = [revealElement1, revealElement2, revealElement3]
  const List = prop.data.user.skills;
  const myList1 = List.slice(0, 10);
  const myList2 = List.slice(10, 20);
  // console.log(myList1,myList2)

  const scrollReveal = function () {
    for (let i = 0; i < revealElements.length; i++) {
      const elementIsInScreen = revealElements[i].current.getBoundingClientRect().top < window.innerHeight / 1.15;

      if (elementIsInScreen) {
        revealElements[i].current.classList.add("revealed");
      } else {
        revealElements[i].current.classList.remove("revealed");
      }
    }
  }

  useEffect(() => {
    scrollReveal();
    window.removeEventListener('scroll', scrollReveal);
    window.addEventListener('scroll', scrollReveal, { passive: true });
    return () => window.removeEventListener('scroll', scrollReveal);
  }, []);

  return (
    <>
      <section ref={ref} className='md:ml-1 ml-40'>
        <div className="flex justify-center h3">
          <h1 className="sub-title">Testimonials</h1>
        </div>
        <div ref={revealElement1} className="testimonial-card ml-0">{testimonialData.map((item, index) => (

          <div key={index} className="test-box bg-gray-800 p-8 min-w-[300px] min-h-[400px]">
            <div className='flex justify-center'><img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={item.image.url} alt={item.image.url} />
            </div>
            <div className="blog-text">
              <h3 className='flex text-3xl p-2 font-bold justify-center mt-5 mb-2'>{item.name}</h3>
              <p className='flex justify-center text-gray-400 text-center'>{item.review}</p>
            </div>
          </div>
        ))}</div>


        <div className="h3">
          <h1 className="sub-title flex justify-center" ref={revealElement1}>Experience</h1>
        </div>
        <div className="flex flex-row gap-0 pl-[25%] justify-center mb-28">
          <div className='relative top-28 border border-red-100 max-h-full'>
          </div>
          <div className="flex-col" ref={revealElement3} data-reveal>
            {experiencedata.map((item, i) => {
              return <div key={i} className='p-20 relative left-0 flex flex-col'>
                <div className='relative top-8 right-20 rounded-full h-4 w-5 border border-red-200 bg-red-900'></div>
                <ul>
                  <li>
                    <h1 className='text-3xl font-bold my-2'>{item.company_name}</h1>
                  </li>
                  <li>
                    <h2 className='text-2xl font-bold my-2'>{item.jobLocation}</h2>
                  </li>
                  <li>
                    <h2 className='mt-1'>{item.jobTitle}</h2>
                  </li>
                  <li>
                    <h2 className='mt-1'>{item.startDate.split("T")[0]} -- {item.endDate.split("T")[0]}</h2>
                  </li>
                  <li>
                    <p className='mt-1'> {item.summary}</p>
                  </li>
                </ul>
              </div>
            })}
            <div ref={revealElement2} className='relative right-20 border border-red-100'></div>
            <div className='relative bottom-2 right-20 rounded-full h-4 w-5 border border-red-200 bg-red-900'></div>
          </div>
        </div>

      </section>
    </>
  )
})

export default Testimonials