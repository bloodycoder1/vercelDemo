import React from 'react'

const HOCComponent = (WrappedComponent) => {
  return function Enhanced(props){
    return(
    <WrappedComponent value="SUSHANT">

    </WrappedComponent>
  )}
}

export default HOCComponent
