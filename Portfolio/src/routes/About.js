import React from 'react'
import Navbar from '../component/Navbar'
import Aboutcontent from '../component/Aboutcontent'
import Footer from '../component/footer'
import Heroimg2 from '../component/Heroimg2'


const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="ABOUT" text="Im a Front-End Developer"/>
      <Aboutcontent/>
      <Footer/>
    </div>
  )
}

export default About