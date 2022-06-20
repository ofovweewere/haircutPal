import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({ name: 'Peter', age: 24, message: 'random message' });
  //console.log(person);
  const [name, setName] = useState('Peter');
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState('random message');
  const changeMessage = () => {
    person.message = 'new message';
    //  let newPerson = person;
    //   newPerson.message ='new';
    //setPerson({...person});
    setPerson({ ...person, message: 'new message' });
    //  setMessage('hello world');
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
