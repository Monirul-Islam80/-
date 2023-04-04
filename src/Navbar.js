import React, {  useRef, useState } from 'react'
import './styles/nav.css'
import logo from './images/2croped.png'
function Navbar() {
    const x = useRef();
    const y = useRef();
    const [state, setstate] = useState(true);
    function myFunction() {
        console.log(state);
        if (state) {
            setstate(!state)
                    x.current.classList.toggle("change");
        y.current.classList.toggle("navanimation")
        }else{
                    x.current.classList.toggle("change");
                    y.current.classList.toggle("antinavanimation")


        }

     
      }

      
    return (
        <nav>
        <div className='nav'>
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
        <div className="cont" ref={x} onClick={()=>myFunction()}>
  <div className="bar1"></div>
  <div className="bar2"></div>
  <div className="bar3"></div>
</div>
                <ul className='linklist' ref={y}>

                    <a href="#home"> <li>Home</li>  </a>
                    <a href="#about"> <li>About</li>  </a>
                    <a href="#skills"> <li>Skills</li>  </a>
                    <a href="#damo"> <li>Demo</li>  </a>
                    <a href="#contact"> <li>Contact</li>  </a>

                </ul>
            </div>





        </nav>
    )
}

export default Navbar