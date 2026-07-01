import "./PriceCart.css";
//import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { getCertificates } from "../API/CertificateApi";

const PriceCart = () => {
    const itemsPerPage = 3; // Number of items to display per page
    const [certificates, setCertificates] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = certificates.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pagesToShow = 4;

    useEffect(() => {
        getCertificates()
        .then(data=>setCertificates(data))
        .catch(err=>console.error("Failed to load certificates", err));
      }, []); 

      const getVisibleItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return certificates.slice(startIndex, startIndex + itemsPerPage);
      };

      const getVisiblePages = () => {
        let startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + pagesToShow - 1);
    
        if (endPage - startPage < pagesToShow - 1) {
          startPage = Math.max(1, endPage - pagesToShow + 1);
        }
    
        return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
      };

      const handleNext = () => {
        if (currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
        }
      };

      const handlePrev = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };

      const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

  return (
    <div className="price">
        <h1 align='center'>Certifications</h1>
        <br />
        <div className="card-container">
            {getVisibleItems().map((item,index)=>(
                <div key={index} className="card">
                <p className="btc">{item.name}</p>
                <span className="bar"></span>
                <h3>Issued by: {item.issuer}</h3>
                <p>Status: {item.status}</p>
                <div className="tag-container">
                {item.tags.map((data,index)=>(
                    <p key={index} className="tag">{data}</p>
                ))}
                </div>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn">
                        VIEW CERTIFICATE
                    </a>
                {/* <Link to="/ContactUs" className="btn">VIEW</Link> */}
            </div>
            ))}
        </div>

        <div className="carousel-controls">
        <button onClick={handlePrev} disabled={currentPage === 1} className="btn">Prev</button>

        
        {getVisiblePages().map(pageNumber => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            className={currentPage === pageNumber ? 'active-page btn' : 'btn'}
          >
            {pageNumber}
          </button>
        ))}

        <button onClick={handleNext} disabled={currentPage === totalPages} className="btn">Next</button>
      </div>

      
      <div className="page-info">
        <span>{currentPage} of {totalPages}</span>
      </div>
        {/* <br />
        <h1>Contact me for projects , either to purchase or to create one for you <br />vijayanand030201@gmail.com</h1>
        <p>Make your portfolio @ just $20 </p>
        <br />
        <Link to="/ContactUs" className="btn btnUpdate">BUY NOW</Link> */}
    </div>
  )
}

export default PriceCart