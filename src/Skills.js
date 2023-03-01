import React from 'react'
import './Skill.css'
const Skills = () => {
  return (
    <div className='skills'>
      <div className='stitle'>
        <h1>Skils</h1>
      </div>
      <div>
        <div>
          <Card name={'Frontend'} stitle={'Web Development'} skills={['HTML', 'CSS', 'JavaScript', 'React']} />
          <Card name={'Backend'} stitle={'Web Development'} skills={['NodeJS', 'ExpressJS', 'MongoDB', 'FireBase']} />
        </div>
        <div>
          <Card name={'Android-app'} stitle={' Development'} skills={['React-Native', 'Expo',]} />
          <Card name={'Others'} stitle={'Skills'} skills={['C', 'Python', 'Java', 'Test-automation', 'Selenium', 'Testng']} />
        </div>
      </div>



    </div>
  )
}
const Card = ({ name, stitle, skills }) => {
  return (
    <div className='ss'>
      <div className='scard'>
        <div className='sname'>
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