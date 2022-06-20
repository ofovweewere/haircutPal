import React, { useState, useEffect } from 'react';
import companyLogo from '../../assets/logo.png';

const Footer = () => {

  return (
    <>
      <nav  style={{ backgroundColor: '#0a0a0a', display: 'flex',minHeight: '17rem',justifyContent: 'center', alignItems:'end' }}>
        <div class="container-fluid" style={{ color: '#cecece', alignSelf:'center', width:'auto'  }}>
          <h3 className='bold'>&copy; Copyright 2021 BarberPal </h3>

          <div>
            <h3 className='bold' > Designed by 070</h3>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Footer;

 