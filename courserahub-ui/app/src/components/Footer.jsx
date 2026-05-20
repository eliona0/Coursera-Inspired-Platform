import React from 'react'
import FooterCards from './FooterCards';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className="footer-container">
    <div className='footer'>
        <FooterCards 
            title="Get Started with AI"
            p1="AWS & DLAI GenAI with LLMs Course"
            p2="DLAI AI For Everyone Course"
            p3="DLAI Deep Learning Specialization"
            p4="DLAI NLP Specialization"
            p5="Google AI Essentials Course"
            p6="Google Cloud Introduction to Generative AI Course"
            p7="IBM Generative AI Fundamentals Specialization"
            p8="Stanford AI in Healthcare Specialization"

        />

        <FooterCards 
            title="Popular Career Certificates"
            p1="Google Cybersecurity Professional Certificate"
            p2="Google Data Analytics Professional Certificate"
            p3="Google Digital Marketing Professional Certificate"
            p4="Google Project Management Professional Certificate"
            p5="Google UX Design Professional Certificate"
            p6="IBM Data Analyst Professional Certificate"
            p7="IBM Data Science Professional Certificate"
            p8="Meta Front-End Developer Professional Certificate"

        />


        <FooterCards 
            title="Popular Subjects"
            p1="Artificial Intelligence"
            p2="Cybersecurity"
            p3="Data Analytics"
            p4="Data Science"
            p5="Digital Marketing"
            p6="Generative AI"
            p7="Machine Learning"
            p8="Microsoft Excel"

        />


        <FooterCards 
            title="Popular Resources"
            p1="How to Become a Data Analyst"
            p2="How to Get a PMP Certification"
            p3="Popular Cybersecurity Certifications"
            p4="Popular Data Analytics Certifications"
            p5="Popular IT Certifications"
            p6="Popular Machine Learning Certifications"
            p7="Popular SQL Certifications"
            p8="GenAI for Software Developers"

        />


    </div>
    <div className="footer-bottom">
      <p>© 2024 Coursera Inc. All rights reserved.</p>

      <div className="icons"> 
      <FacebookOutlinedIcon style={{color: '#777777', fontSize: 35 }} />
      <LinkedInIcon style={{ color: '#777777', fontSize: 35 }} />
      <TwitterIcon style={{ color: '#777777', fontSize: 35 }} />
      <YouTubeIcon style={{ color: '#777777', fontSize: 35 }} />
      <InstagramIcon style={{ color: '#777777', fontSize: 35 }} />

      </div>
    </div>
    </div>
  )
}

export default Footer;