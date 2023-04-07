import React, { useRef, useState } from "react";
import "./styles/nav.css";
import logo from "./images/2croped.png";
function Navbar() {
  const x = useRef();
  const y = useRef();
  const [state, setstate] = useState(true);
  function myFunction() {
    if (state) {
      setstate(!state);
      x.current.classList.toggle("change");
      y.current.classList.toggle("navanimation");
    } else {
      x.current.classList.toggle("change");
      y.current.classList.toggle("antinavanimation");
    }
  }

  return (
    <nav>
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="cont" ref={x} onClick={() => myFunction()}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul className="linklist" ref={y}>
          <a href="#home">
            {" "}
            <li>Home</li>{" "}
          </a>
          <a href="#about">
            {" "}
            <li>About</li>{" "}
          </a>
          <a href="#skills">
            {" "}
            <li>Skills</li>{" "}
          </a>
          <a href="#damo">
            {" "}
            <li>Demo</li>{" "}
          </a>
          <a href="#contact">
            {" "}
            <li>Contact</li>{" "}
          </a>
          <div className="soclogo">
            <div className="i1">
              <a href="https://www.linkedin.com/in/monirul-islam-soumik">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div className="i2">
              <a href="https://github.com/Monirul-Islam80">
                <i className="fa-brands fa-square-github"></i>
              </a>
            </div>
            <div className="i3">
              <a href="#a">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
            </div>
            <div className="i4">
              <a href="#a">
                <i className="fa-solid fa-square-envelope"></i>
              </a>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
