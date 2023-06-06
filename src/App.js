import { useEffect, useRef } from "react";
import About from "./About";
import Contact from "./Contact";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Work from "./Work";

function App() {
  const obj = useRef();
  const obj1 = useRef();
  const obj2 = useRef();
  const obj3 = useRef();
  const obj4 = useRef();
  const obj5 = useRef();
  var x = 0;
  var y = 0;
  document.addEventListener("mousemove", (e) => {
    x = e.pageX;
    y = e.pageY;

    obj.current && (obj.current.style.left = `${x}px`);
    obj.current && (obj.current.style.top = `${y}px`);
    obj1.current && (obj1.current.style.left = `${x + 10}px`);
    obj1.current && (obj1.current.style.top = `${y + 10}px`);
    obj2.current && (obj2.current.style.left = `${x + 20}px`);
    obj2.current && (obj2.current.style.top = `${y + 20}px`);
    obj3.current && (obj3.current.style.left = `${x + 30}px`);
    obj3.current && (obj3.current.style.top = `${y + 30}px`);
    obj4.current && (obj4.current.style.left = `${x + 40}px`);
    obj4.current && (obj4.current.style.top = `${y + 40}px`);
    obj5.current && (obj5.current.style.left = `${x + 50}px`);
    obj5.current && (obj5.current.style.top = `${y + 50}px`);
  });

  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Work />
      <Contact />
      <div className="followme" ref={obj}></div>
      <div className="d1" ref={obj1}></div>
      <div className="d2" ref={obj2}></div>
      <div className="d3" ref={obj3}></div>
      <div className="d4" ref={obj4}></div>
      <div className="d5" ref={obj5}></div>
    </div>
  );
}

export default App;
