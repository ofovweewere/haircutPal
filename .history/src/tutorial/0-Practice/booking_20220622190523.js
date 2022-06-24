import React from 'react';
import BreakSection from './breakSection.js';
const Booking = () => {


  return (
    <>
     <BreakSection title={Booking}/>
       <h1>Custom Checkboxes</h1>
<label class="container">One
  <input type="checkbox" checked="checked"/>
  <span class="checkmark"></span>
</label>
<label class="container">Two
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
<label class="container">Three
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
<label class="container">Four
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>  
    </>
  );
};

export default Booking;

 