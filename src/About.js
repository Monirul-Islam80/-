import React, { useEffect, useRef, useState } from "react";
import "./styles/About.css";

const About = ({ isActive }) => {
  const z = useRef();
  const x = useRef();
  const [isScrollTriggered, setIsScrollTriggered] = useState(false);

  // window.addEventListener("wheel", (e) => {
  //     if (e.deltaY < 0) {
  //         if (opacity <= 0) {
  //             setopacity(opacity + 1);
  //         }

  //     } else if (e.deltaY > 0) {
  //         setopacity(opacity - 1);
  //     }
  // });
  const [text, setText] = useState("");
  const textWithHTML = `  <p>> Hi,</p>
  <p>> This is Monirul Islam Soumik</p>
  <p>> I am a Student, Full-Stack Web Developer and Freelancer.</p>
  <p>> I can do Frontend, Backend and Database work.</p>
  <p>> Currently Working and Learning diffrent things</p>
  <p>> on Web Development and Software Development.</p>`; // Text with HTML tags
  const typingSpeed = 100; // Speed of typing in milliseconds
  useEffect(() => {
    document.getElementById("inAbout").addEventListener("mouseover", () => {
      isActive("n_about");
    });
  }, [isActive]);
  useEffect(() => {
    console.log(z.current.getBoundingClientRect().top);
    window.addEventListener("scroll", () => {
      var windowHeight = window.innerHeight;
      var revleTop = z.current.getBoundingClientRect().top;
      z.current.style.opacity = `${
        ((windowHeight - revleTop - 1) * 20) / 100
      }%`;
    });
    const handleScroll = () => {
      if (!isScrollTriggered && window.scrollY > window.innerHeight / 2) {
        setIsScrollTriggered(true);

        // Your code to execute when scroll triggered
        let charIndex = 0;
        const interval = setInterval(() => {
          if (charIndex < textWithHTML.length) {
            setText((prevText) => prevText + textWithHTML.charAt(charIndex));
            charIndex++;
          } else {
            clearInterval(interval);
          }
        }, typingSpeed);

        return () => clearInterval(interval);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrollTriggered]);

  return (
    <>
      <div className="about_container" ref={z}>
        <div className="about" id="inAbout">
          <div className="h_about">
            <div className="a_title">
              <h1>ABOUT ME</h1>
            </div>
            <span ref={x}></span>
            <div
              className="a_details"
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
          </div>
        </div>
        {/* <div className="a_img">
          <img src={img2} alt="an images" width={"50%"} />
        </div> */}
      </div>

      <div className="contactlist">
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
          <a href="https://web.facebook.com/monirul.islam.soumik">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
        </div>
        <div className="i4">
          <a href="mailto:monirulislam49007@gmail.com">
            <i className="fa-solid fa-square-envelope"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
