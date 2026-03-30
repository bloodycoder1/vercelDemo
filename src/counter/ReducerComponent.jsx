import React, { useContext, useReducer } from 'react'
import { ContextObj } from '../ContextAPI/Context'

const ReducerComponent = () => {
    let [state , dispatch] = useReducer(reducer,{count:0})
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    let value = useContext(ContextObj)
    // console.log(value, "THis is coming from Reducer");
    




























    function reducer(state,action){
        switch(action.type)
        {
            case "increment": return ({...state, count:state.count+1})
            case "decrement": return ({...state, count:state.count-1})
            default: return state
        }
    }
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>{dispatch({type:"increment"})}}>Increment</button>
        <button onClick={()=>{dispatch({type:"decrement"})}}>Decrement</button>
    </div>
  )
}

export default ReducerComponent
