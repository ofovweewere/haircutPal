import React, { useState, useEffect } from 'react';

const BreakSection = ({ title, ID }) => {
  const [elementClass, setClass] = useState(
    window.innerWidth < 992
      ? '100px'
      : '0px'
  );
  const checkSize = () => {
    if (window.innerWidth < 992) {
      setClass('100px');
    } else {
      setClass('0px');
    }
  };
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);
  return (
    <>
      <div className="card breakSection" id={ID} style={{ scrollMarginTop: `${elementClass}` }}>
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
