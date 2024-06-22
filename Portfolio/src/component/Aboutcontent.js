import "./Aboutcontent.css"
import React from 'react'
import{Link}from "react-router-dom"
import About1 from "../Assert/about1.avif"
import About2 from "../Assert/about3.avif"

const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>
                Im a react font-end Developer. I create responsive secure Websites for my clients.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>

        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                <img src={About1} className="img"/>

                </div>
                <div className="img-stack bottom">
                <img src={About2} className="img"/>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Aboutcontent