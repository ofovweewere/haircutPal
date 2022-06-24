import React, { useState, useEffect } from 'react';

import Header from './header.js';
import Footer from './footer.js';
import Landing from './landing.js';
import Booking from './booking.js';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const UseEffectFetchData = () => {
  
  return (
    <body className="Site">
      <Header />
      <Landing/>

      <Footer />
    </body>
  );
};

export default UseEffectFetchData;
