import React, {useState, useEffect} from 'react'

const CountWithUseEffect = () => {
    const [count, setCount] = useState(0);

    function increament() {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log("Hello count");
    }, [count])

    return (
        <div className='UseStateWithVariable'>
            <h1>{count}</h1>
            <div>
                <button onClick={increament}>Increament</button>
                <button onClick={() => count > 0 ? setCount(count - 1) : 0}>Decreament</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    )
}

export default CountWithUseEffect