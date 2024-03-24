"use client"
import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import Mainpage from './Components/Mainpage'
import About from './Components/About'
import Service from './Components/Service'
import Portfolio from './Components/Portfolio'
import Foot from './Components/Foot'
import NoData from './Components/NoData'
import scrooldn from './assets/images/scroll-down.svg'
import shape from './assets/images/gallery-shape.svg'
import Testimonials from './Components/Testimonials'
import Scroll from './Components/Scroll'
import Cursor from './Components/Cursor'
import Contact from './Components/Contact'

export default function Home() {
  const [data, setData] = useState();

  const skills = useRef();
  const home = useRef();
  const about = useRef();
  const services = useRef();
  const portfolio = useRef();
  const contacts = useRef();
  const testimonials = useRef();

  useEffect(() => {
    let API_KEY = "65b3a22c01d900e96c4219ae"
    fetch(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])
  console.log(data)

  useEffect(() => {
    document.title = data ? data.user.about.name : "loading";
  }, [data]);
  return (
    <>
    {data ?
      <>
        <Navbar data={data} testimonials={testimonials} services={services} skills={skills} home={home} about={about} contacts={contacts} portfolio={portfolio} />
        <main>
          <article>
            <Mainpage data={data} ref={home} />
            <About data={data} ref={about} />
            <Service data={data} ref={services} />
            <Portfolio data={data} ref={portfolio} />
            <Skills data={data} ref={skills} />
            <Testimonials data={data} ref={testimonials} />
            <div onClick={() => home.current.scrollIntoView()} className="flex justify-center p-3 scroll-down">
              <img src={scrooldn} width="40" height="66" loading="lazy" alt="mouse scroll" />
            </div>
            <img src={shape} width="220" height="78" loading="lazy" alt="" className="shape" />

          </article>
        </main>
        <Contact data={data} ref={contacts}/>
        <Foot data={data} />
        <Scroll/>
        <Cursor/>
      </> : <NoData />
    }
  </>
  );
}
