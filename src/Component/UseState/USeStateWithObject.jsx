import React, { useState } from 'react';

function USeStateWithObject() {

    const [coin, setCoins] = useState({
        gold : 0,
        silver : 0,
        bronze: 0
    });
    console.log(coin);

    function goldIncreament(){
        setCoins({...coin, gold: coin.gold + 1});
    }
    function silverIncreament(){
        setCoins({...coin, silver: coin.silver + 1});
    }
    function bronzIncreament(){
        setCoins({...coin, bronze: coin.bronze + 1});
    }

    function reset(){
        setCoins({...coin, gold: 0, silver: 0, bronze : 0});
    }

  return (
        <div className='USeStateWithObject UseStateWithVariable'>
            <h1>Gold : {coin.gold}</h1>
            <h1>Silver : {coin.silver}</h1>
            <h1>Bronze : {coin.bronze}</h1>
            <div>
            <button onClick={goldIncreament}>Gold Increament</button>
                <button onClick={silverIncreament}>Silver Increament</button>
                <button onClick={bronzIncreament}>Bronze Increament</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
  )
}

export default USeStateWithObject
