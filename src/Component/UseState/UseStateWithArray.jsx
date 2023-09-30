import React, { useState } from 'react';

const UseStateWithArray = () => {

  const [fruit, setfruit] = useState([]);
  const [fav, setfav] = useState('');

  function favFruit(event) {
    setfav(event.target.value);
  }

  function addFav() {
    console.log(fav);
    setfruit([...fruit, fav]);
    setfav('');
  }
  return (
    <div className='UseStateWithArray'>
      <div>
        <input type="text" value={fav} placeholder='Enter your favourite fruit' onChange={favFruit} />
        <button onClick={addFav}>Add Fruit</button>
      </div>
      <h1>Fruit List : {fruit.join(" ")}</h1>
    </div>
  )
}

export default UseStateWithArray;