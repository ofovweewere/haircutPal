import React, { useState, useEffect } from 'react';
import companyLogo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { HashLink as Links } from 'react-router-hash-link';
const Header = () => {

const [elementClass, setClass] = useState(window.innerWidth < 992?'navbar  navbar-expand-lg navbar-light':'navbar fixed-top navbar-expand-lg navbar-light');
const handleCollapse = () => {
  
  var nav = document.getElementById('navbarSupportedContent');
  var btn = document.getElementById('navbarBtn');
  nav.classList.remove('show');
  btn.classList.add('collapsed');
  
};
  const checkSize = () => {
   
    
    if(window.innerWidth < 992)
    {
        setClass('navbar  navbar-expand-lg navbar-light');
    }
    else
    {
        setClass('navbar fixed-top navbar-expand-lg navbar-light');
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
          <a className="" href="#">
            <img src={companyLogo} alt="BigCo Inc. logo" />
          </a>
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
                <Links
                  to="/landing/#mainView"
                  className="nav-link"
                 
                  onClick={handleHomeClick}
                >
                  Home
                </Links>
              </li>
              <li className="nav-item">
                <Links to="/landing/#about" className="nav-link" onClick={handleCollapse}>
                  About Us
                </Links>
              </li>
              <li className="nav-item">
                <Links to="/landing/#services" className="nav-link" onClick={handleCollapse}>
                  Services
                </Links>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link" onClick={handleCollapse}>
                  Book a Haircut
                </Link>
              </li>
              <li className="nav-item">
                <Links to="/landing/#contact" className="nav-link" onClick={handleCollapse}>
                  Contact Us
                </Links>
              </li>

              {/* <li class="nav-item">
                <a class="nav-link" href="/login">
                  <i className="fas fa-sign-in-alt fa-lg"></i> Login
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

 