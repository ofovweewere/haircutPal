import React from 'react';
import backgroundImage from '../../assets/backgroundImage.jpg';

const BookCutOne = () => {


  return (
    <id='mainView'>
             <div
          className="card"
          loading='lazy'
          style={{
            width: '100%',
            minHeight: '45rem',
            backgroundBlendMode: 'multiply',
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            
          }}
        >
          <div
            class="card-body"
            style={{ display: 'flex', alignItems: 'end', justifyContent: 'center' }}
          >
            <button className="btn" style={{ fontSize: '2.8rem' }}>
              Book a Haircut
            </button>
           
          </div>
        </div>
    </>
  );
};

export default BookCutOne;

 