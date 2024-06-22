import React from 'react'
import Navbar from '../component/Navbar'
import Heroimg2 from '../component/Heroimg2'
import Footer from '../component/footer'
import Priceingcards from '../component/priceingcards'
import Work from '../component/Work'


const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="PROJECT" text="Some of my most recent works"/>
      <Work/>
      <Priceingcards/>
      <Footer/>
    </div>
  )
}

export default Project