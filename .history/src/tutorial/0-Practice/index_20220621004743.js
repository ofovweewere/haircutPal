import React, { useState, useEffect } from 'react';

import Header from './header.js';
import Footer from './footer.js';
import Landing from './landing.js';

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
      <Landing/>

      <Footer />
    </body>
  );
};

export default UseEffectFetchData;
