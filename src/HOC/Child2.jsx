import React from 'react'
import HOCComponent from './HOCComponent'

const Child2 = (props) => {
    console.log(props , "FROM HOC Child 2");
    
  return (
    <div>
      <h1>THis is Child 2</h1>
    </div>
  )
}

export default HOCComponent(Child2)
