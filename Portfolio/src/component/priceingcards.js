import "./Priceingcards.css"
import React from 'react'
import {Link  } from "react-router-dom";
const Priceingcards = () => {
  return (
  <div className="pricing">
  <div className="card-container">
    <div className="card">
        <h3>
            -BASIC-
        </h3>
        <span className="bar"></span>
     <p className="btc">$ 100</p>
     <p>- 3 Days -</p>
     <p>- 3 Pages -</p>
     <p>- Featured -</p>
     <p>- Responsive Design -</p>
     <Link to="/contact" className="btn">PURCHASE NOW</Link>
    </div>
    <div className="card">
        <h3>
            - PREMIUM-
        </h3>
        <span className="bar"></span>
     <p className="btc">$ 200</p>
     <p>- 2 Days -</p>
     <p>- 3 Pages -</p>
     <p>- Featured -</p>
     <p>- Responsive Design -</p>
     <Link to="/contact" className="btn">PURCHASE NOW</Link>
    </div>
    <div className="card">
        <h3>
            - BUSINESS -
        </h3>
        <span className="bar"></span>
     <p className="btc">$ 300</p>
     <p>- 5 Days -</p>
     <p>- 8 Pages -</p>
     <p>- Featured -</p>
     <p>- Responsive Design -</p>
     <Link to="/contact" className="btn">PURCHASE NOW</Link>
    </div>
  </div>

  </div>
  )
}

export default Priceingcards