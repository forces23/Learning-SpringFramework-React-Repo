import { useState } from 'react'
import "./Counter.css"

export default function Counter() {

    //const state = useState(0)
    const [count, setCount] = useState(0)

    function incrementCounterFunction(){
        console.log('!!! increment clicked !!!') 
        setCount(count + 1)
        //console.log("state: " + state)
    }

    function decrementCounterFunction(){
        console.log('!!! decrement clicked !!!')
        setCount(count - 1)
    }

    return (
        <div className="counter">
            <div>
                <button className="counterButton"
                        onClick={incrementCounterFunction}   
                >+1</button>
                <button className="counterButton"
                        onClick={decrementCounterFunction}
                >-1</button>
                <br/>
                <button className="counterButton"
                        onClick={""}   
                >+2</button>
                <button className="counterButton"
                        onClick={""}
                >-2</button>
                <br/>
                <button className="counterButton"
                        onClick={""}   
                >+5</button>
                <button className="counterButton"
                        onClick={""}
                >-5</button>
                <br/>   
                <div className="count">{count}</div>
                <button className="counterButton"
                        onClick={""}
                >Reset</button>
            </div>
        </div>
    )
}