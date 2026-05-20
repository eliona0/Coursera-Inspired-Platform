import React from 'react'
import Content2 from '../components/Content2'
import Section from '../components/Section'


const OnlineDegrees = () => {
  return (
    <div>
    <div className='odd'>
    <h1>Take your career to the next level with an online degree</h1>
    </div>
    <Content2/>
    <div className="content odd-section">
    <h2 className='cmp1' style={{marginTop:"50px"}}>Hear why students enjoy learning on Coursera</h2>
    <Section
        imgUrl="https://learntocodewith.me/wp-content/uploads/2022/07/Studying-from-home-1024x662.jpg"
        title="~Live sessions, office hours, discussion boards─you can participate from wherever you are...Getting my MBA makes me feel empowered. I don't need to stop working, I don't need to stop being a mother, I don't need to stop having my life.~"
        txt="Patricia Ribiero Peña"
        txt2="Master of Business Administration (iMBA)"
        />
        </div>
    </div>
  )
}

export default OnlineDegrees