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
        <BreakSection title="ABOUT" ID='about' />
        <About />
        <BreakSection title="SERVICES & PRODUCTS" ID='services' />
        <Services />
        <BreakSection title="CONTACT US"  />
        <Contact />
     </>
        
     

     
  );
};

export default Landing;
