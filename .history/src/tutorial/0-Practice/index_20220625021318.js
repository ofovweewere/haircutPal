import React, { useState, useEffect , useContext} from 'react';

import Header from './header.js';
import Footer from './footer.js';
import Landing from './landing.js';
import Booking from './booking.js';
import Error from './error.js';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const PersonContext = React.createContext();
const UseEffectFetchData = () => {
  const [bookings, setBookings] = useState([false,false,false,false,false,false]);
   const itemSelection = (id)=>{
    let arr = [true,true,true,true,true,true];

    arr[id] = false;
    setBookings(arr);
  }
  return <PersonContext.Provider value={{removePerson, people} }> 
    <body className="Site" style={{backgroundColor:'black'}}>
      
      <Router>
      <Header />
       <main class="Site-content" >
      <Switch>
        <Route exact path='/'>
          <Landing/>
        </Route>
        <Route exact path='/landing'>
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
  </PersonContext.Provider>
};

export default UseEffectFetchData;
