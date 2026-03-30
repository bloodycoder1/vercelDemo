import React, { useContext } from 'react'
import { ContextObj } from './Context';

const ChildContext = () => {

    let value = useContext( ContextObj)
    // console.log(value);
    let {Consumer} = ContextObj
    // console.log(Consumer.value);
    
    
  return (
    <div>
        {value.name}
      <h1>This is the Child Context</h1>
    </div>
  )
}

export default ChildContext
