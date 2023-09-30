import React, { useState } from "react";

function hello() {
    console.log("Inside hello");
    return 0;
}


// Lazy initialiing
const LazyState = () => {
    // Value is calculate again and again when the component is re-render
    //  const [count, setCount] = useState(hello()); 

    // Value is calculate only first render of component is called lazyState
    const [count, setCount] = useState(() => hello());

    return (
        <div>
            <h1>Hey value is = {count} </h1>
            <button onClick={() => setCount(count + 1)}> Increase </button>

        </div>
    )

}


export default LazyState;
