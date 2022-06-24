import React, { useState, useEffect } from 'react';
import companyLogo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { HashLink as Links } from 'react-router-hash-link';
const DummyHeader = () => {

const [elementClass, setClass] = useState(window.innerWidth < 992?'navbar  navbar-expand-lg navbar-light':'navbar  navbar-expand-lg navbar-light');
const handleCollapse = () => {
  
  var nav = document.getElementById('navbarSupportedContent');
  var btn = document.getElementById('navbarBtn');
  nav.classList.remove('show');
  btn.classList.add('collapsed');
  
};

const handleHomeClick = () => {
  
  handleCollapse();
  window.scrollTo(0,0);
  
};

  const checkSize = () => {
   
    
    if(window.innerWidth < 992)
    {
        setClass('navbar  navbar-expand-lg navbar-light');
    }
    else
    {
        setClass('navbar  navbar-expand-lg navbar-light');
    }
  };
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  },[]);
  return (
    <>
      <nav
        className={elementClass}
        id="head"
        style={{ backgroundColor: '#fff', boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px` }}
      >
        <div className="container-fluid">
          <Link to="/" className="" >
            <img src={companyLogo} alt="BigCo Inc. logo" />
          </Link>
          <button
            className="navbar-toggler"
            id="navbarBtn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Links to="/landing/#about" className="nav-link" >
                  About Us
                </Links>
              </li>
              <li className="nav-item">
                <Links to="/landing/#services" className="nav-link">
                  Services
                </Links>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link" >
                  Book a Haircut
                </Link>
              </li>
              <li className="nav-item">
                <Links to="/landing/#contact" className="nav-link">
                  Contact Us
                </Links>
              </li>

             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DummyHeader;

 