"use client"
import { forwardRef, useEffect, useRef } from "react"
// import sign from '@/assets/images/signature.png'
// import aboutshape3 from '@/assets/images/about-shape-3.svg'

const About = forwardRef((prop, ref) => {

    const revealElement1 = useRef();
    const revealElement2 = useRef();
    const revealElement3 = useRef();

    const revealElements = [revealElement1, revealElement2, revealElement3]

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
            <section ref={ref} className="section about" id="about" aria-label="about me">
                <div className="container">

                    <div className="about-content">

                        <h2 className="h2 section-title" ref={revealElement1} data-reveal="right">
                            Hi. I’m <br />
                            {prop.data.user.about.name}
                        </h2>

                        <div className="wrapper has-before" ref={revealElement2} data-reveal="right">

                            <p className="section-text">
                            {prop.data.user.about.description}
                                {/* A passionate
                                <em className="em">photograher</em>
                                who are working in this field for
                                <em className="em">last 10 years.</em>
                                I’m ready to give you my best. */}
                            </p>

                            <img src={"/assets/images/signature.png"} width="151" height="92" loading="lazy" alt="signature"
                                className="img" />

                        </div>

                    </div>

                    <figure className="about-banner" ref={revealElement3} data-reveal="left">

                        <div className="flex justify-center md:pr-1 pr-16" style={{ width: 450, height: 625 }}>
                            <img src={prop.data.user.about.avatar.url} width="450" height="625" loading="lazy" alt={prop.data.user.about.name}
                                className="img-cover" />
                        </div>

                        {/* <p className="imglogo shape shape-1">{prop.data.user.about.name.trim()[0]}</p> */}

                        

                    </figure>

                    <img src={"/assets/images/about-shape-3.svg"} width="239" height="232" loading="lazy" alt=""
                        className="shape shape-3" />

                </div>
            </section>
        </>
    )
})

export default About