import React from 'react'
import './contact.css'
const Contact = () => {
    return (
        <div className='contact'>
            <div className="container">
                <form className="form">
                    <h2>Contact Me</h2>
                    <div className="inputbox">
                        <input type="text" required />
                        <i className="fa-regular fa-user"></i>
                        <span>name</span>
                    </div>
                    <div className="inputbox">
                        <input type="text" required />
                        <i className="fa-regular fa-envelope"></i>
                        <span>email</span>
                    </div>
                    <div className="inputbox">
                        <textarea type="text" required ></textarea>
                        <i className="fa-regular fa-message"></i>
                        <span>message</span>
                    </div>
                    <div className="inputbox">
                        <input type="submit" required />

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact