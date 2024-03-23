"use client"
import { forwardRef, useEffect, useRef, useState } from "react"
import heroimage from '../assets/images/hero-shape.svg'

const Mainpage = forwardRef((prop, ref) => {
    const [activeLetterBoxIndex, setactiveLetterBoxIndex] = useState(0)
    const [active, setactive] = useState(false)
    const [lastActiveLetterBoxIndex, setlastActiveLetterBoxIndex] = useState(0)
    const [totalLetterBoxDelay, settotalLetterBoxDelay] = useState(0)

    // const text = ["Photographer","Shutterbug","Cameraman","Pacific Portraits"]

    // fix problems in letter effect 

    const letterBoxes1 = useRef()
    const letterBoxes2 = useRef()
    const letterBoxes3 = useRef()
    const letterBoxes4 = useRef()

    const setLetterEffect = function () {
        let letterBoxes = [letterBoxes1.current, letterBoxes2.current, letterBoxes3.current, letterBoxes4.current]
        letterBoxes1.current.textContent = prop.data.user.services[0].name
        letterBoxes2.current.textContent = prop.data.user.services[1].name
        letterBoxes3.current.textContent = prop.data.user.services[2].name
        letterBoxes4.current.textContent = prop.data.user.services[3].name

        // loop through all letter boxes
        // setTimeout(function () {
        for (let i = 0; i < letterBoxes.length; i++) {
            // set initial animation delay
            let letterAnimationDelay = 0;

            // get all character from the current letter box
            const letters = letterBoxes[i].textContent.trim();
            // remove all character from the current letter box
            letterBoxes[i].textContent = "";

            // loop through all letters
            for (let j = 0; j < letters.length; j++) {

                // create a span
                const span = document.createElement("span");

                // set animation delay on span
                span.style.animationDelay = `${letterAnimationDelay}s`;

                // set the "in" class on the span, if current letter box is active
                // otherwise class is "out"
                if (i === activeLetterBoxIndex) {
                    span.classList.add("in");
                } else {
                    span.classList.add("out");
                }

                // pass current letter into span
                span.textContent = letters[j];

                // add space class on span, when current letter contain space
                if (letters[j] === " ") span.classList.add("space");

                // pass the span on current letter box
                letterBoxes[i].appendChild(span);

                // skip letterAnimationDelay when loop is in the last index
                if (j >= letters.length - 1) break;
                // otherwise update
                letterAnimationDelay += 0.05;

            }

            // get total delay of active letter box
            if (i === activeLetterBoxIndex) {
                settotalLetterBoxDelay(Number(letterAnimationDelay.toFixed(2)))
            }

            // add active class on last active letter box
            if (i === lastActiveLetterBoxIndex) {
                letterBoxes[i].classList.add("active");
            } else {
                letterBoxes[i].classList.remove("active");
            }
            setlastActiveLetterBoxIndex(i)
        }


        // console.log("last",lastActiveLetterBoxIndex)

        // update activeLetterBoxIndex based on total letter boxes
        activeLetterBoxIndex >= (letterBoxes.length) ? setactiveLetterBoxIndex(0) : setactiveLetterBoxIndex((prev) => { return prev + 1 });
        setlastActiveLetterBoxIndex(activeLetterBoxIndex)
    }

    useEffect(() => {
        setTimeout(function () {
            setLetterEffect()
        }, 2000);
    }, [activeLetterBoxIndex])

    return (
        <>
            <section ref={ref} className="section hero" id="home" aria-label="home">
                <div className="container">

                    <img src={prop.data.user.about.avatar.url} width="322" height="322" alt="" className="hero-banner" />

                    <div className="hero-content">

                        <h1 className="h1 hero-title">{prop.data.user.about.name}</h1>

                        <div className="wrapper h2">
                            <strong className="strong data-letter-effect" ref={letterBoxes1} data-letter-effect></strong>
                            <strong className="strong data-letter-effect" ref={letterBoxes2} data-letter-effect></strong>
                            <strong className="strong data-letter-effect" ref={letterBoxes3} data-letter-effect></strong>
                            <strong className="strong data-letter-effect" ref={letterBoxes4} data-letter-effect></strong>
                        </div>

                        <p className="hero-text">{prop.data.user.about.exp_year} Years Of Experience</p>

                    </div>

                </div>

                <img src={heroimage} width="211" height="189" alt="" className="shape" />

            </section>
        </>
    )
})

export default Mainpage