import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      {/* {<h1>{firstValue}</h1> }
  <h1>{secondValue}</h1> */}
      <h1>{text || 'John doe'}</h1>
      <h1>{text && 'Hello world'}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>there is an error</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
      {/* {text && <h1>{'Hello jane'}</h1> } */}
      {/* {!text && <h1>{'Hello jane'}</h1> } */}
      {
        // if(){console.log('hello world');}
      }
    </>
  );
};

export default ShortCircuit;
