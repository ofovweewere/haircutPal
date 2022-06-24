import React from 'react';
import backgroundImage from '../../assets/backgroundImage.jpg';
import { Link } from 'react-router-dom';

const Error = () => {


  return (
    <>
             <div
          className="card"
          style={{
            width: '100%',
            minHeight: '45rem',
            backgroundBlendMode: 'multiply',
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            background-color:'black',
          }}
        >
          <div
            class="card-body"
            style={{ display: 'flex', alignItems: 'end', justifyContent: 'center' }}
          >
             <h1 style={{color:'red'}}>Error Page</h1>
     
            <Link to='/' className="btn" style={{ fontSize: '2.8rem' }}>
             Back Home
            </Link>
           
          </div>
        </div>
    </>
  );
};

export default Error;
 
