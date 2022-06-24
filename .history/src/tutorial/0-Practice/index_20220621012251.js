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
    <body className="Site" style={{backgroundColor:'black'}}>
      
      <Router>
      <Header />
       <main class="Site-content">
      <Switch>
        <Route exact path='/'>
          <Landing/>
        </Route>
        <Route exact path='/landing/:id'>
          <Landing/>
        </Route>
        <Route path='/services'>
         <Booking/>
        </Route>
       
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
       </main>
       <Footer />
    </Router>
      
     

     
    </body>
  );
};

export default UseEffectFetchData;
