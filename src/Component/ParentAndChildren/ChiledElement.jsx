import React from 'react'

const ChiledElement = ({name, children}) => {
  return (
    <div style={{backgroundColor: 'wheat', margin:'10px'}}>
        <h1>{name}</h1>

      {/* {props.children} */}
        {children}
    </div>
  )
}

export default ChiledElement