import React, { createContext } from 'react'
 export let ContextObj = createContext()

const Context = (props) => {
    // console.log(context);
    let {Provider} = ContextObj
  return (
    <div>
        <ContextObj.Provider value={{name:"Sushant"}}>
            
            {props.children}
        </ContextObj.Provider>
      
    </div>
  )
}

export default Context
