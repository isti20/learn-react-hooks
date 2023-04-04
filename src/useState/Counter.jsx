import React, { useState } from "react"

function Counter() {
    const [ count, setCount ] = useState(0)

    const addCount = () => {
        setCount(count + 1)
    }

    return ( 
        <div>
            <p>Nilai dari state counter</p>
            <h2>{count}</h2>
            <button onClick={addCount}>
            Add counter
            </button>
        </div>
    );
}

export default Counter;