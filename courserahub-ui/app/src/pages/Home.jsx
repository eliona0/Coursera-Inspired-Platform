import React from 'react'
import Header from "../components/Header";
import Content from "../components/Content";
import Section from '../components/Section';


const Home = () => {
  return (
    <div>
        <Header
        imgUrl="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/TWYyZEiCfeq2wqtu344SG/7cfe6c86fceec41ccade3bb5a45f1fc6/BC_3541_LOHP_MSFT_DS.png?auto=format%2Ccompress&dpr=1&w=660&q=40"
        title="Accelerate data insights with Microsoft Copilot"
        desc="Leverage the power of AI to optimize your data-driven tasks, models, and reports with Microsoft Copilot for Data Science."
        btn="Enroll today >"
        />
        <Content/>
        <Section
        imgUrl="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6xXERT0XZPJDXgjPzr8Bve/d858e0cda1a5e5df2cb8accd65d5c1b7/outcomes.png?auto=format%2Ccompress&dpr=1&w=606&h=553&q=40"
        title = "Learner outcomes on Coursera"
        txt="77% of learners report career benefits, such as new skills, increased pay, and new job opportunities."
        btn="Join for free"
        />
        
    </div>

    
  )
}

export default Home