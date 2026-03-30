import React from 'react'
import HOCComponent from './HOCComponent'

const ChildHOCComponent = (props) => {
    console.log(props);
    
  return (
    <div>
      
    </div>
  )
}

export default HOCComponent(ChildHOCComponent)
