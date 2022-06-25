import React, { useState, useEffect } from 'react';
import BreakSection from './breakSection.js';
import DummyHeader from './dummyHeader.js';
import Heading from './heading.js';
import CheckboxOption from './checkboxOption.js';
import CheckboxOptionTwo from './checkboxOptionTwo.js';
import Footing from './footing.js';
import BlueButton from './blueButton.js';
const Booking = () => {

  const [screenSize, setClass] = useState(
    window.innerWidth < 992
      ? 'small'
      : 'large'
  );

    const checkSize = () => {
   
    if(window.innerWidth < 992)
    {
        setClass('small');
    }
    else
    {
        setClass('large');
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
      <BreakSection title="BOOKING" ID="booking" background="#427bd2" color="#fff" colorTwo='black' />
      {screenSize === 'large' && (
        <div class="container" style={{ display: 'flex' }}>
          <div style={{flexGrow:'1'}}>
            <Heading title="Book an appointment" description="Select Your Service" color='#427bd2' />
            <CheckboxOption title="Regular Haircut" description="00:30" cost="25" />
            <CheckboxOption title="Beard Trim" description="00:15" cost="15" />
            <CheckboxOption title="Haircut and Beard Trim" description="00:45" cost="35" />
            <CheckboxOption title="Kids Haircut" description="00:30" cost="20" />
            <CheckboxOption title="Buzz Cut" description="00:15" cost="18" />
            <CheckboxOption title="Sides and Back Haircut" description="00:15" cost="18" />
            <Footing title="Subtotal" description="25" />
          </div>

          <div>
            <Heading title="Book an appointment" description="Select Your Service" color='transparent' colorTwo='transparent' />
            <BlueButton title="NEXT STEP" textSize='1.2rem' />
          </div>
        </div>
      )}

      {screenSize === 'small' && (
        <div class="container" style={{ display: 'flex' }}>
          <div style={{flexGrow:'1'}}>
            <Heading title="Book an appointment" description="Select Your Service" color='#427bd2' />
            <CheckboxOptionTwo title="Regular Haircut" description="00:30" cost="25" />
            <CheckboxOptionTwo title="Beard Trim" description="00:15" cost="15" />
            <CheckboxOptionTwo title="Haircut and Beard Trim" description="00:45" cost="35" />
            <CheckboxOptionTwo title="Kids Haircut" description="00:30" cost="20" />
            <CheckboxOptionTwo title="Buzz Cut" description="00:15" cost="18" />
            <CheckboxOptionTwo title="Sides and Back Haircut" description="00:15" cost="18" />
            <Footing title="Subtotal" description="25" />
          </div>

          <div>
            <Heading title="Book an appointment" description="Select Your Service" color='transparent' colorTwo='transparent' />
            <BlueButton title="NEXT STEP" textSize='1.2rem' />
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;

 