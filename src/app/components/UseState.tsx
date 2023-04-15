"use client"
import { useState } from "react";

function UseState() {
    const [val, setval] = useState(0)

    const Decerement = () => {
        if (val == 0) {
            val == 0
        } else {
            setval(val - 1)
        }
    }

    const Increment = () => {
        setval(val + 1)
    }
    return <div>
        <button onClick={Decerement}>-</button>
        {val}
        <button onClick={Increment}>+</button>
    </div>;
}
export default UseState;