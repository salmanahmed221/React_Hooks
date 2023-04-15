"use client"

import { useEffect, useState } from "react";


function UseEffectExample() {
    const [val, setVal] = useState(window.screen.width)

    const currentScreenWidth = () => {
        setVal(() => window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", currentScreenWidth)
        return () => {
            window.removeEventListener("resize", currentScreenWidth)
        }
    })
    return <div>
        The size of the window is <span>{val}</span>
    </div>;
}

export default UseEffectExample;
