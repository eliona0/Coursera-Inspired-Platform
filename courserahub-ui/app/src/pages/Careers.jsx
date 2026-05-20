import React from 'react'
import Header from "../components/Header";
import Section from '../components/Section';
import Content3 from '../components/Content3';

const Careers = () => {
  return (
    <div>
        <Header
        imgUrl="https://images.ctfassets.net/wp1lcwdav1p1/5MeAXCoQVVbMTiqEmLwvd8/9e3a544103cecacecca1b718168a4138/learner-header-image-4x.png"
        title="Launch your new career with a Professional Certificate on Coursera"
        desc="Professional Certificates offer flexible, online training designed to get you job-ready for high-growth fields."
        btn=" Explore Careers"
        />
      
        <Content3/>
        
        <div className="careers-section">
        <Section
        imgUrl="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/51y3a8YEIvgFTS2qrYNB7s/f806d317ff47487a3d9a2704f4ab9296/iStock-1130519249__1__1.jpg?auto=format%2Ccompress&dpr=1"
        title="Get resources and support to guide you through the job search process."
        txt="Showcase your skills"
        txt2="Enhance your resume"
        txt3="Ace your interview"
        />
        </div>
    </div>
  )
}

export default Careers