import React, { useEffect, useRef, useState } from 'react'
import './styles/About.css'
import img2 from './images/Untitleddesign.png'
const About = () => {
    const z = useRef();
    const [opacity, setopacity] = useState(0)
    // window.addEventListener("wheel", (e) => {
    //     if (e.deltaY < 0) {
    //         if (opacity <= 0) {
    //             setopacity(opacity + 1);
    //         }




    //     } else if (e.deltaY > 0) {
    //         setopacity(opacity - 1);
    //     }
    // });
    useEffect(() => {

        window.addEventListener("scroll",()=>{


            var windowHeight = window.innerHeight;
            var revleTop = z.current.getBoundingClientRect().top;
        z.current.style.opacity = `${(windowHeight - revleTop -1)*20/100}%`
           
         })
    }, [opacity])

    return (
        <>
            <div id='about' className='about_container' ref={z} >

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

            <div className='contactlist'>
                <div className='i1'><a href='https://www.linkedin.com/in/monirul-islam-soumik'><i className="fa-brands fa-linkedin"></i></a></div>
                <div className='i2'><a href='https://github.com/Monirul-Islam80'><i className="fa-brands fa-square-github"></i></a></div>
                <div className='i3'><a href=''><i className="fa-brands fa-square-facebook"></i></a></div>
                <div className='i4'><a href=''><i className="fa-solid fa-square-envelope"></i></a></div>
            </div>
        </>
    )
}

export default About