import React from 'react';
import BreakSection from './breakSection.js';
const Booking = () => {


  return (
    <>
     <BreakSection title={Booking}/>
           <h1>Custom Checkboxes</h1>
<label class="containers">One
  <input type="checkbox" checked="checked"/>
  <span class="checkmark"></span>
</label>
<label class="containers">Two
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
<label class="containers">Three
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
<label class="containers">Four
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
    </>
  );
};

export default Booking;

 