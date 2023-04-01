import { PropTypes } from 'prop-types'

export default function CounterButton({by, incrementCounterParentFunction, decrementCounterParentFunction, ResetCounterParentFunction}) {

    function incrementCounterFunction(){
            console.log('!!! increment clicked !!!')
            incrementCounterParentFunction(by)
    }

    function decrementCounterFunction(){
            console.log('!!! decrement clicked !!!')
            decrementCounterParentFunction(by)
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
                    </div>
            </div>
    )

}

// This was to set a type for the prop so that you cant just pass a string you need to pass a int 
PropTypes = {
   by: PropTypes.number
}

//This was used to set a default value for the prop so when you use it and dont set a value, it will still have 1
CounterButton.defaultProps = {
    by: 1
}
