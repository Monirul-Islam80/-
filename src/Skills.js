import React from 'react'
import './styles/Skill.css'
const Skills = () => {
  return (
    <div className='skills'>
      <div className='stitle'>
        <h1>Skills</h1>
      </div>
      <div>
        <div>
          <Card name={'Frontend'} stitle={'Web Development'} logo={"fa-solid fa-code fa-bounce"} skills={['HTML', 'CSS', 'JavaScript', 'React']} />
          <Card name={'Backend'} stitle={'Web Development'} logo={"fa-solid fa-server fa-bounce"} skills={['NodeJS', 'ExpressJS', 'MongoDB', 'FireBase']} />
        </div>
        <div>
          <Card name={'Android-app'} stitle={' Development'} logo={"fa-solid fa-mobile-screen-button fa-bounce"} skills={['React-Native', 'Expo',]} />
          <Card name={'Others'} stitle={'Skills'} logo={"fa-solid fa-database fa-bounce"} skills={['C', 'Python', 'Java', 'Test-automation', 'Selenium', 'Testng']} />
        </div>
      </div>



    </div>
  )
}
const Card = ({ name, stitle, logo, skills }) => {
  return (
    <div className='ss' id='skills'>
      <div className='scard'>
        <div className='sname'>
        <i className={logo}></i>
          <h1>{name}</h1><h1> {stitle}</h1>
        </div>
        <div className='sdet'>
          {
            skills.map((x, i) => (
              <span key={i}>{x}</span>
            ))

          }


        </div>
      </div>
    </div>

  )
}

export default Skills