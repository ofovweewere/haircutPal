import React from 'react';

const BreakSection = ({title, ID}) => {


  return (
    <>
      <div className="card breakSection" id={ID} style={{scrollMarginTop: '100px'}}>
          <div
            class="card-body"
            style={{ display: 'flex', alignItems: 'end', justifyContent: 'center' }}
          >
            <h2>{title}</h2>
          </div>
        </div>
      
    </>
  );
};

export default BreakSection;

 