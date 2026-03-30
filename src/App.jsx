import React from 'react'
import ReducerComponent from './counter/ReducerComponent'
import Context from './ContextAPI/Context'
import ChildContext from './ContextAPI/ChildContext'
import ChildHOCComponent from './HOC/ChildHOCComponent'
import Child2 from './HOC/Child2'

const App = () => {
  return (
    <div>
      <Context>
        <ChildContext/>
      </Context>
      <ReducerComponent/>
      <ChildHOCComponent/>
      {/* <Child2/> */}
      {Child2()}
    </div>
  )
}

export default App
