import React, { useEffect } from "react";
import "./styles/work.css";
import p1 from "./images/Screenshot 2023-07-06 231053.png";
import p2 from "./images/Screenshot 2023-07-06 231423.png";
import p3 from "./images/Screenshot 2023-07-06 231522.png";
import p4 from "./images/Screenshot 2023-07-06 231551.png";
import p5 from "./images/Screenshot 2023-07-06 233337.png";
import p6 from "./images/Screenshot 2023-07-06 235030.png";
import p7 from "./images/Screenshot 2023-07-06 235322.png";
import p8 from "./images/Screenshot 2023-07-07 000334.png";
export default function Work({ isActive }) {
  useEffect(() => {
    document.getElementById("damo").addEventListener("mouseover", () => {
      isActive("n_damo");
    });
  }, [isActive]);
  return (
    <>
      <div className="works" id="damo">
        <h2>Some of my previous works</h2>
        <div className="work">
          <div className="webs">
            <a href="https://realstate-nextjs-delta.vercel.app/">
              <img src={p6} alt={p6} />
              check it out
            </a>
          </div>
          <div className="webs">
            <a href="https://majids.netlify.app/">
              <img src={p7} alt={p7} />
              check it out
            </a>
          </div>
          <div className="webs">
            <a href="https://monirul-islam80.github.io/ColorCube/">
              <img src={p3} alt={p3} />
              check it out
            </a>
          </div>
          <div className="webs">
            <a href="https://monirsopenai.netlify.app/">
              <img src={p2} alt={p2} />
              check it out
            </a>
          </div>
          <div className="webs">
            <a href="https://monirul-islam80.github.io/reactone/">
              <img src={p4} alt={p4} />
              check it out
            </a>
          </div>
          <div className="webs">
            <a href="https://monirul-islam80.github.io/The-Todo-List/">
              <img src={p8} alt={p8} />
              check it out
            </a>
          </div>
          <div className="webs">
            <a href="https://monirul-islam80.github.io/dark.github.io/">
              <img src={p1} alt={p1} />
              check it out
            </a>
          </div>
          <div className="webs">
            <a href="https://monirul-islam80.github.io/my-blog/">
              <img src={p5} alt={p5} />
              check it out
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
