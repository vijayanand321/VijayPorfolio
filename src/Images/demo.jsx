import "./PriceCart.css";
import React from 'react';
import { Link } from "react-router-dom";

const PriceCart = () => {
  return (
    <div className="price">
        <h1 align='center'>Certifications</h1>
        <br />
        <div className="card-container">
            <div className="card">
                <h3>Full Stack Development</h3>
                <span className="bar"></span>
                <p className="btc">$10</p>
                <p>- 3 Days -</p>
                <p>- 3 pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/ContactUs" className="btn">VIEW</Link>
            </div>
            <div className="card">
                <h3>- Premium -</h3>
                <span className="bar"></span>
                <p className="btc">$20</p>
                <p>- 2 Days -</p>
                <p>- 5 pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/ContactUs" className="btn">PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3>- Business -</h3>
                <span className="bar"></span>
                <p className="btc">$30</p>
                <p>- 5 Days -</p>
                <p>- 8 pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/ContactUs" className="btn">PURCHASE NOW</Link>
            </div>
        </div>
        <br />
        <h1>Contact me for projects , either to purchase or to create one for you <br />vijayanand030201@gmail.com</h1>
        <p>Make your portfolio @ just $20 </p>
        <br />
        <Link to="/ContactUs" className="btn btnUpdate">BUY NOW</Link>
    </div>
  )
}

export default PriceCart