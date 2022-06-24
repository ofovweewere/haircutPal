import React, { useState, useEffect } from 'react';
import BreakSection from './breakSection.js';
import DummyHeader from './dummyHeader.js';
import Heading from './heading.js';
import CheckboxOption from './checkboxOption.js';
import Footing from './footing.js';
import BlueButton from './blueButton.js';
const Booking = () => {

  const [screenSize, setClass] = useState(
    window.innerWidth < 992
      ? false
      : true
  );

    const checkSize = () => {
   
    if(window.innerWidth < 992)
    {
        setClass(false);
    }
    else
    {
        setClass(true);
    }
  };
  
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);
  return (
    <div style={{ background: '#fff' }}>
      <BreakSection title="BOOKING" ID="booking" background="#427bd2" color="#fff" />
      <div class="container">
        <div>
         <Heading title='Book an appointment' description='Select Your Service'/>
         <screenSize && CheckboxOption title='Regular Haircut' description='00:30' cost='25'/> 
         <CheckboxOption title='Beard Trim' description='00:15' cost='15'/>
         <CheckboxOption title='Haircut and Beard Trim' description='00:45' cost='35'/>
         <CheckboxOption title='Kids Haircut' description='00:30' cost='20'/> 
         <CheckboxOption title='Buzz Cut' description='00:15' cost='18'/>
         <CheckboxOption title='Sides and Back Haircut' description='00:15' cost='18'/> 
         <Footing title='Subtotal' description='25'/>  
        </div>

        <div>
          <BlueButton title='NEXT STEP'/>  
        </div>
      </div>
    </div>
  );
};

export default Booking;

 