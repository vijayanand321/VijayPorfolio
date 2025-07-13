import React, { useState, useEffect } from 'react';
import WorkCard from "./WorkCard";
import { getProjectsData } from '../API/ProjectsApi';
import "./WorkCard.css";

const Work = () => {
  const itemsPerPage = 3; // Number of items to display per page
  const [projects, setProjects] = useState([]); // State to store project data
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = projects.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Calculate total pages

  const pagesToShow = 4; // Number of page numbers to show at a time

  useEffect(() => {
    // Fetch project data from the backend API
    const fetchProjects = async () => {
      const projectData= await getProjectsData();
      setProjects(projectData);
    };

    fetchProjects(); // Call the fetch function
  }, []); 

  const getVisibleItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return projects.slice(startIndex, startIndex + itemsPerPage);
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
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="carousel-container">
        
        {getVisibleItems().map((item) => (
          <WorkCard
            key={item.id} 
            imageData={item.imageData}
            title={item.title}
            text={item.text}
            techStack={item.techStack.replace(/\//g,'').trim()}
            view={item.view}
          />
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
    </div>
  );
}

export default Work;
