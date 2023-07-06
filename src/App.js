import { useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Work from "./Work";

function App() {
  function animateComponents(z, cln) {
    console.log(z, cln);
    z.current.classList.add(cln);
  }

  let count = 0;
  let funcIsRunning;
  const func = (px, py) => {
    funcIsRunning = true;
    var idiv = document.createElement("div");

    idiv.className = "followme";
    idiv.style.top = `${py}px`;
    idiv.style.left = `${px}px`;
    document.querySelector("body").appendChild(idiv);

    setTimeout(() => {
      let z = document.querySelector(".followme");
      z && z.parentElement.removeChild(z);
    }, 1000);
    funcIsRunning = false;
  };

  document.addEventListener("mousemove", (e) => {
    count++;
    let x = e.pageX;
    let y = e.pageY;

    if (count >= 15 && !funcIsRunning) {
      func(x, y);

      count = 0;
    }
  });
  const clArry = ["n_home", "n_about", "n_skills", "n_damo", "n_contact"];
  const [currentcl, setcurrentcl] = useState("");
  const isActive = (id) => {
    if (currentcl !== id) {
      currentcl &&
        document.querySelector("." + currentcl).classList.remove("activeNav");
      document.querySelector("." + id).classList.add("activeNav");
      setcurrentcl(id);
    }
  };

  return (
    <div>
      <Navbar animateComponents={animateComponents} />
      <HeroSection isActive={isActive} animateComponents={animateComponents} />
      <About isActive={isActive} />
      <Skills isActive={isActive} />
      <Work isActive={isActive} />
      <Contact isActive={isActive} />
    </div>
  );
}

export default App;

// idiv.style.backgroundColor = `#${x}`;

// obj.current && (obj.current.style.left = `${x}px`);
// obj.current && (obj.current.style.top = `${y}px`);
// obj1.current && (obj1.current.style.left = `${x + 10}px`);
// obj1.current && (obj1.current.style.top = `${y + 10}px`);
// obj2.current && (obj2.current.style.left = `${x + 20}px`);
// obj2.current && (obj2.current.style.top = `${y + 20}px`);
// obj3.current && (obj3.current.style.left = `${x + 30}px`);
// obj3.current && (obj3.current.style.top = `${y + 30}px`);
// obj4.current && (obj4.current.style.left = `${x + 40}px`);
// obj4.current && (obj4.current.style.top = `${y + 40}px`);
// obj5.current && (obj5.current.style.left = `${x + 50}px`);
// obj5.current && (obj5.current.style.top = `${y + 50}px`);
