import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const fx = useEffect(()=>{
    refContainer.current.focus();
   
  });
  const refContainer = useRef(null);
  const refContainer2 = useRef(null);
  const handleSubmit = (e)=>
  {
    e.preventDefault();
    console.log(refContainer.current.value);
  }
  return <>
  <form action="" className='form' onSubmit={handleSubmit}>
    <div >
      <input type="text" ref = {refContainer} />
      <button type='submit'>submit</button>
    </div>
    </form></>;
};

export default UseRefBasics;
