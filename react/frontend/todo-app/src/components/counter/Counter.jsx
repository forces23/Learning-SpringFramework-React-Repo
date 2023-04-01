import { useState } from 'react'
import "./Counter.css"
import PropTypes from 'prop-types'

export default function Counter(){
        const [count, setCount] = useState(0)

        function incrementCounterPArentFunction(by){
                setCount(count+by)
        }

        return(
                <>
                <span className="count">{count}</span><br/>
                <span>^^^ TOTAL ^^^</span>
                <CounterButton by={1}/>
                <CounterButton by={2}/>
                <CounterButton by={5}/>
                </>
        )
    }

// This was to set a type for the prop so that you cant just pass a string you need to pass a int 
// CounterButton.PropTypes = {
//   by: PropTypes.number
// }

//This was used to set a default value for the prop so when you use it and dont set a value it will still have one
// CounterButton.defaultProps = {
//   by: 1
// }

function CounterButton({by}) {

        //const state = useState(0)
        const [count, setCount] = useState(0)

        function incrementCounterFunction(){
                console.log('!!! increment clicked !!!') 
                setCount(count + by)        
                //console.log("state: " + state)
        }

        function decrementCounterFunction(){
                console.log('!!! decrement clicked !!!')
                setCount(count - by)
        }

        function resetFunction(){
                console.log("!!! RESET !!!")
                setCount(count-count)
        }

        return (
                <div className="counter">
                        <div>
                        <button className="counterButton"
                                onClick={incrementCounterFunction}   
                        >+{by}</button>
                        <button className="counterButton"
                                onClick={decrementCounterFunction}
                        >-{by}</button>
                        <br/>
                        <button className="counterButton"
                                onClick={incrementCounterFunction} 
                        >+{by}</button>
                        <button className="counterButton"
                                onClick={decrementCounterFunction}
                        >-{by}</button>
                        <br/>
                        <button className="counterButton"
                                onClick={incrementCounterFunction} 
                        >+{by}</button>
                        <button className="counterButton"
                                onClick={decrementCounterFunction}
                        >-{by}</button>
                        <br/>   
                        <span className="count">{count}</span>
                        <br/>
                        <button className="resetButton"
                                onClick={resetFunction}
                        >Reset</button>
                        </div>
                </div>
        )

}