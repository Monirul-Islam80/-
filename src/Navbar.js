import React from 'react'
import './styles/nav.css'
import logo from './images/2.png'
function Navbar() {
    return (
        <nav>
            <div className='nav'>
        <div>
            <img src={logo} alt="logo" width={'100px'}/>
        </div>
                <ul className='linklist'>

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