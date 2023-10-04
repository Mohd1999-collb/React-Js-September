import React from 'react'
import CricketerContext from './CricketerContext'


/**Step-3: Access the value from  global object CricketerContext*/
const Player = () => {

  const { cricketer, setCricketer } = React.useContext(CricketerContext);

  return (
    <div>
      {/* This is the second way to acess the value */}
      <h1>African Palyer</h1>
      <h1>Name : {cricketer.name}</h1>
      <h1>Team : {cricketer.team}</h1>
      <h1>Age : {cricketer.age}</h1>
      <h1>Retired : {cricketer.retired}</h1>
      <h1>Run : {cricketer.run}</h1>
      <button style={{ width: "10rem", height: "3rem", borderRadius: "10px", margin: "20px" }} onClick={() => setCricketer({ ...cricketer, age: 50, run: 500 })}>Update the Age</button>
    </div>
  )
}

export default Player


// {/* This is the firts way to acess the value */}
{/* <CricketerContext.Consumer>
{
  (info)=>
    <h1>Welcome to {info}</h1>        
}
</CricketerContext.Consumer> */}