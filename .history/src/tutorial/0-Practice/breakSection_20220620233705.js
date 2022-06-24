import React from 'react';

const BreakSection = ({title}) => {


  return (
    <>
      <div className="card breakSection">
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

 