import React from 'react';
import BreakSection from './breakSection.js';
import DummyHeader from './dummyHeader.js';
import Heading from './heading.js';
import CheckboxOption from './checkboxOption.js';
const Booking = () => {


  return (
    <div style={{ background: '#fff' }}>
      <BreakSection title="BOOKING" ID="booking" background="#427bd2" color="#fff" />
      <div class="container">
        <div>
         <Heading title='Book an appointment' description='Select Your Service'/>
         <CheckboxOption title='Regular Haircut' description='00:30' cost='25'/>
        
        </div>
      </div>
    </div>
  );
};

export default Booking;

 