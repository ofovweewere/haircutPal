import React, { useState, useEffect } from 'react';


import BookCutOne from './bookCut.js';
import BreakSection from './breakSection.js';
import About from './about.js';
import Services from './servicesAndProducts.js';
import Contact from './contact.js';


// second argument

const Landing = () => {
  
  return (
   
     <>
     <BookCutOne />
        <>
      <div className="card breakSection" id='about'>
          <div
            class="card-body"
            style={{ display: 'flex', alignItems: 'end', justifyContent: 'center' }}
          >
            <h2>ABOUT</h2>
          </div>
        </div>
      
    </>
        <About />
        <BreakSection title="SERVICES & PRODUCTS" />
        <Services />
        <BreakSection title="CONTACT US" />
        <Contact />
     </>
        
     

     
  );
};

export default Landing;
