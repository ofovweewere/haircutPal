import React, { useState, useEffect } from 'react';

import Header from './header.js';
import Footer from './footer.js';
import BookCutOne from './bookCut.js';
import BreakSection from './breakSection.js';
import About from './about.js';
import Services from './servicesAndProducts.js';
import Contact from './contact.js';
const url = 'https://api.github.com/users';

// second argument

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    // console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <body className="Site">
      <Header />
      <main
        class="Site-content"
        
      >
       

        <BookCutOne/>
        <BreakSection title='ABOUT'/>
        <About/>
        <BreakSection title='SERVICES & PRODUCTS' />
        <Services/>
        <BreakSection title='CONTACT US' />
        <Contact/>
        

       

       
      </main>

      <Footer />
    </body>
  );
};

export default UseEffectFetchData;
