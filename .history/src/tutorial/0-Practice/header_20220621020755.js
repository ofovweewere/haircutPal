import React, { useState, useEffect } from 'react';
import companyLogo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
const Header = () => {

const [elementClass, setClass] = useState(window.innerWidth < 992?'navbar  navbar-expand-lg navbar-light':'navbar fixed-top navbar-expand-lg navbar-light');
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
        style={{ backgroundColor: '#fff' }}
      >
        <div className="container-fluid">
          <a className="" href="#">
            <img src={companyLogo} alt="BigCo Inc. logo" />
          </a>
          <button
            className="navbar-toggler"
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
                <Link to='/' className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a href='/landing/#about' className="nav-link" >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/projects">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  Book a Haircut
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact Us
                </a>
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

 