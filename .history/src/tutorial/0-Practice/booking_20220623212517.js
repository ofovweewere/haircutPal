import React from 'react';
import BreakSection from './breakSection.js';
import DummyHeader from './dummyHeader.js';
import Heading from './heading.js';
const Booking = () => {


  return (
    <div style={{ background: '#fff' }}>
      <BreakSection title="BOOKING" ID="booking" background="#427bd2" color="#fff" />
      <div class="container">
        <div>
         <Heading/>
          <label class="containers">
            One
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="containers">
            Two
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="containers">
            Three
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="containers">
            Four
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Booking;

 