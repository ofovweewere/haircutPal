import React, { useState } from 'react';

const UseStateBasics = () => {
  //   console.log(useState('Hello world'));
  //   const value = useState(1)[0];
  //   const handler = useState(1)[1];
  //   console.log(value, handler);
  const [text, setState] = useState('random title');

  const handleClick = () => {
    if (text === 'random title') {
      setState('hello world');
    } else {
      setState('random title');
    }
  };
  // setInterval(()=>{setText(Math.random())},200)
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
