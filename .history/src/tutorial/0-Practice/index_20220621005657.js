import React, { useState, useEffect } from 'react';

import Header from './header.js';
import Footer from './footer.js';
import Landing from './landing.js';
import Booking from './booking.js';
import Error from './error.js';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const UseEffectFetchData = () => {
  
  return (
    <body className="Site">
       <main class="Site-content">
      <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Landing/>
        </Route>
        <Route path='/booking'>
         <Booking/>
        </Route>
       
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
       <Footer />
    </Router>
      
     

      </main>
    </body>
  );
};

export default UseEffectFetchData;
