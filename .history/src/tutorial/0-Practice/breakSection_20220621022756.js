import React from 'react';

const BreakSection = ({title, ID}) => {


  return (
    <>
      <div className="card breakSection" id={ID}>
          <div
            class="card-body"
            style={{ display: 'flex', alignItems: 'start', justifyContent: 'center' }}
          >
            <h2>{title}</h2>
          </div>
        </div>
      
    </>
  );
};

export default BreakSection;

 