import { useState } from "react"

function Counter () {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    } 

    const decrease = () => {
        setCount(count - 1);
    } 
 return (
    <>
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
    </>
 )
}

export default Counter