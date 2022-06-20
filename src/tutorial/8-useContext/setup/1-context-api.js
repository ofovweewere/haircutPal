import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)
const PersonContext = React.createContext();
// two components - Provider and consumer
const ContextApi = () => {
  const [people, setPeople] = useState(data);
  //console.log(people);
  const removePerson = (id)=>{
    setPeople((people)=>{
      return people.filter((person)=> person.id !== id)
    });
  }
  return <PersonContext.Provider value={{removePerson, people} }>
    <h3>Prop drilling</h3>
    <List  />
  </PersonContext.Provider>
}

const List = ()=>{
 let {people} = useContext(PersonContext);
  return <>
  {people.map((person)=>{
    return <SinglePerson key={person.id} {...person} />
  })}
 </>

} 

const SinglePerson = ({id, name})=>{
  let {removePerson} = useContext(PersonContext);
  //console.log(data);
  return <div className='item'>
    <h4> {name}</h4>
    <button className='btn' onClick={()=>removePerson(id)}>remove</button>
  </div>
}
export default ContextApi;
