import React from 'react'
import ChiledElement from './ChiledElement'

const ParentElement = () => {
  return (
    <div >
      <ChiledElement name="Talib">
        <h1>MAi parent huu</h1>
      </ChiledElement>
      <ChiledElement name="Talib">
        <h1>MAi parent huu</h1>
        <h1>MAi parent huu</h1>
      </ChiledElement>
      <ChiledElement />
      <ChiledElement />
    </div>
  )
}

export default ParentElement