import React, { useState, useEffect , useContext} from 'react';

import Header from './header.js';
import Footer from './footer.js';
import Landing from './landing.js';
import Booking from './booking.js';
import Error from './error.js';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
export const BookingsContext = React.createContext();
const UseEffectFetchData = () => {
  const [bookings, setBookings] = useState([false,false,false,false,false,false]);
  const [checked, setChecked] = useState([false,false,false,false,false,false]);
   const itemSelection = (id)=>{
   
    let arr = [false,false,false,false,false,false];
    let arrChecked = [false,false,false,false,false,false];
      if(checked[id] === false)
      {
         arr = [true, true, true, true, true, true];
         arr[id] = false;
          arrChecked = [false,false,false,false,false,false];
          arrChecked[id] = true;
      }
      else
      {
        arrChecked[id] = false;

        
      }
    setBookings(arr);
    setChecked(arrChecked);
  }
  return <BookingsContext.Provider value={{bookings,itemSelection} }> 
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
  </BookingsContext.Provider>
};

export default UseEffectFetchData;
