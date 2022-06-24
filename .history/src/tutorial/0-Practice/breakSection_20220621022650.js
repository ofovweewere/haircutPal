import React from 'react';

const BreakSection = ({title, ID}) => {


  return (
    <div id={ID}>
      <div className="card breakSection" >
          <div
            class="card-body"
            style={{ display: 'flex', alignItems: 'end', justifyContent: 'center' }}
          >
            <h2>{title}</h2>
          </div>
        </div>
      
    </div>
  );
};

export default BreakSection;

 