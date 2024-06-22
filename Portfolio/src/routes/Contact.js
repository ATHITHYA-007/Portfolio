import React from 'react'
import Navbar from '../component/Navbar'

import Footer from '../component/footer'
import Heroimg2 from '../component/Heroimg2'
import Form from '../component/Form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="CONTACT" text="Let's have a chat"/>
      <Form/>
      <Footer/>   
    </div>
  )
}

export default Contact