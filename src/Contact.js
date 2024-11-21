import React, { useEffect, useRef, useState } from "react";
import "./styles/contact.css";
const Contact = ({ isActive }) => {
  const [text, settext] = useState("");
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const x = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    document.querySelector(".notification").classList.add("sub");
    setemail("");
    settext("");
    setname("");
    setTimeout(() => {
      document.querySelector(".notification").classList.remove("sub");
    }, 5000);
  };
  useEffect(() => {
    document.getElementById("contact").addEventListener("mouseover", () => {
      isActive("n_contact");
    });
  }, [isActive]);

  return (
    <>
      <div
        className="contact"
        onSubmit={(e) => handleSubmit(e)}
        id="contact"
        ref={x}
      >
        <div name="contact" className="container" data-netlify="true" >
          <form className="form">
            <h2>Contact Me</h2>
            <div className="inputbox">
              <input
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
              />
              <i className="fa-regular fa-user"></i>
              <span>name</span>
            </div>
            <div className="inputbox">
              <input
                type="text"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              />
              <i className="fa-regular fa-envelope"></i>
              <span>email</span>
            </div>
            <div className="inputbox">
              <textarea
                value={text}
                onChange={(e) => settext(e.target.value)}
                type="text"
                required
              ></textarea>
              <i className="fa-regular fa-message"></i>
              <span>message</span>
            </div>
            <div className="inputbox">
              <input type="submit" required />
            </div>
          </form>
        </div>{" "}
        <div className="notification">
          <span>Message Sent!</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
