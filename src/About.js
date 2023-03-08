import React, { useEffect, useRef, useState } from 'react'
import './styles/About.css'
import img2 from './images/Untitleddesign.png'
const About = () => {
    const z = useRef();
    const [opacity, setopacity] = useState(0)
    window.addEventListener("wheel", (e) => {
        if (e.deltaY < 0) {
            if (opacity <= 0) {
                setopacity(opacity + 1);
            }




        } else if (e.deltaY > 0) {
            setopacity(opacity - 1);
        }
    });
    useEffect(() => {
        z.current.style.opacity = `${-opacity * 7}%`

    }, [opacity])

    return (
        <>
            <div className='about_container' ref={z} >

                <div className='about'>
                    <div className='h_about'>
                        <div className='a_title'>
                            <h1>ABOUT ME</h1>
                        </div>
                        <div className='a_details'>
                            <p>{">"} Hi,</p>
                            <p>{">"} This is Monirul Islam Soumik</p>
                            <p>{">"} I am a Student, Full-Stack Web Developer and Freelancer.</p>
                            <p>{">"} I can do Frontend, Backend and Database work.</p>
                            <p>{">"} Currently Working and Learning diffrent</p>
                            <p>{">"} things on Web Development and Software Development.</p>
                        </div>

                    </div>

                </div>
                <div className='a_img'>
                    <img src={img2} alt='an images' width={"50%"} />
                </div>

            </div>


        </>
    )
}

export default About