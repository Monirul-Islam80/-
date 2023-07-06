import React, { useEffect, useRef, useState } from "react";

import "./styles/herosection.css";
// import i1 from './images/1.png'
// import i2 from './images/2.png'
// import i3 from './images/3.png'
// import i4 from './images/4.png'
// import i5 from './images/5.png'
// import i6 from './images/6.png'
// import i7 from './images/7.png'
// import i8 from './images/8.png'
// import i9 from './images/9.png'
// import i10 from './images/10.png'
// import i11 from './images/11.png'
// import i12 from './images/12.png'
import hpic1 from "./images/19362653-ai (1).png";

import hpic2 from "./images/19362653-ai (2).png";
import hpic3 from "./images/19362653-ai (3).png";
import hpic4 from "./images/19362653-ai (4).png";
import hpic5 from "./images/19362653-ai (5).png";
import hpic6 from "./images/19362653-ai (6).png";
import hpic7 from "./images/19362653-ai (7).png";
import hpic8 from "./images/19362653-ai (8).png";
import hpic9 from "./images/19362653-ai (9).png";
import hpic10 from "./images/19362653-ai (10).png";
import hpic11 from "./images/19362653-ai (11).png";
import hpic12 from "./images/19362653-ai (12).png";
import hpic13 from "./images/19362653-ai (13).png";
import hpic14 from "./images/19362653-ai (14).png";
import hpic15 from "./images/19362653-ai (15).png";
import hpic16 from "./images/19362653-ai (16).png";
import hpic17 from "./images/19362653-ai (17).png";
import hpic18 from "./images/19362653-ai (18).png";
import hpic19 from "./images/19362653-ai (19).png";
import hpic21 from "./images/19362653-ai(22).png";
import cvfile from "./images/monirulsCV3-12.pdf";
const HeroSection = ({ isActive, animateComponents }) => {
  const arr = [
    hpic18,
    hpic1,
    hpic2,
    hpic3,
    hpic4,
    hpic5,
    hpic6,
    hpic7,
    hpic8,
    hpic9,
    hpic10,
    hpic11,
    hpic12,
    hpic13,
    hpic14,
    hpic15,
    hpic16,
    hpic17,

    hpic19,
    hpic21,
  ];
  let x = useRef();
  let y = useRef();
  let a = useRef();

  let hsection = useRef();

  // var middleThreshold = false;
  // window.addEventListener("wheel", (e) => {
  //     if (e.deltaY < 0) {
  //         if (postonx <= 0) {
  //             setpostonx(postonx + 1);
  //         }
  //     } else if (e.deltaY > 0) {
  //         setpostonx(postonx - 1);
  //     }
  // });

  useEffect(() => {
    // if (called > window.innerHeight / 2) {
    //   // Perform the action when scrolled to the middle
    //   if (!middleThreshold && called < window.innerHeight / 2 + 10) {
    //     // a.current.scrollIntoView({ behavior: "smooth" });
    //     // middleThreshold = true;
    //     // console.log(middleThreshold);
    //     window.location.href = "/#about";
    //   }
    //   console.log(
    //     "Scrolled to the middle of the page!",

    //     called
    //   );
    // }
    // y.current.style.transform = `translateX(${-postonx * 20}px)`;
    // x.current.style.transform = `translateX(${postonx * 20}px)`;
    window.addEventListener("scroll", () => {
      var revleTop = x.current.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      // if (!(window.scrolly > windowHeight / 2)) {
      //   setcalled(window.scrollY);
      // }
      var revealPoint = windowHeight / 2 + 10;

      if (-revleTop > revealPoint) {
        x.current.classList.add("active");
      } else {
        x.current.classList.remove("active");
      }
    });
    document.getElementById("home").addEventListener("mousemove", parallax);
  }, []);
  useEffect(() => {
    document.getElementById("home").addEventListener("mouseover", () => {
      isActive("n_home");
    });
  }, [isActive]);
  useEffect(() => {
    animateComponents(hsection, "component2");
    animateComponents(y, "component3");
  }, [animateComponents]);
  function parallax(e) {
    this.querySelectorAll(".layer").forEach((layer) => {
      const speed = layer.getAttribute("data-speed");
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;
      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
  return (
    <>
      <div id="home" className="herosec" ref={hsection}>
        <div className="sec1" ref={x}>
          <div>
            <p className="hello">
              <span style={{ color: "#ffd700" }}>{"{"}</span> Hello,
            </p>
            <p className="prename">
              I <span className="am">am</span>{" "}
              <span className="name">Monirul Islam Soumik</span>
            </p>
            <p className="title">
              "I make things for the web!"{" "}
              <span style={{ color: "#ffd700" }}>{"}"}</span>
            </p>
            <p>
              <span style={{ color: "#376489" }}>I</span>{" "}
              <span style={{ color: "white" }}>am</span>{" "}
              <span style={{ color: "#dcdcaa" }}>a</span> {"<"}
              <span className="profassion" style={{ color: "#3bc9b0" }}></span>
              {"/>"}
            </p>
            <a className="download" href={cvfile} download>
              <button>
                Download CV<i className="fa-solid fa-download"></i>
              </button>
            </a>
          </div>
        </div>

        <div className="sec2" ref={y}>
          {arr.map((x, i) => (
            <img
              src={x}
              className="layer"
              data-speed={Math.floor(Math.random() * (8 - -8 + 1)) + -8}
              alt={"x" + 1}
              key={i}
              width="100%"
            />
          ))}
        </div>
      </div>
      <span id="about" ref={a}></span>
    </>
  );
};

export default HeroSection;
