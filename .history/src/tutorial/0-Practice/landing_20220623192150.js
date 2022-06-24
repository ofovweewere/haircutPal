import React, { useState, useEffect } from 'react';


import BookCutOne from './bookCut.js';
import BreakSection from './breakSection.js';
import About from './about.js';
import Services from './servicesAndProducts.js';
import Contact from './contact.js';


// second argument

const Landing = () => {
  
  return (
   
     <div style={{display:'flex', flexGrow:'0', flexDirection:'column'}}>
     <BookCutOne  />
        <BreakSection title="ABOUT" ID='about' />
        <About />
        <BreakSection title="SERVICES & PRODUCTS" ID='services' />
        <Services />
        <BreakSection title="CONTACT US" ID='contact' />
        <Contact />
     </div>
        
     

     
  );
};

export default Landing;
