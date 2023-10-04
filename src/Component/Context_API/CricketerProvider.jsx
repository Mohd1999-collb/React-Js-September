import React, { useState } from 'react'
import CricketerContext from './CricketerContext'

/**Step-2: Store(insert) the value inside the empty global object CricketerContext */
const CricketerProvider = (props) => {

  const [cricketer, setCricketer] = useState({
    name: "AB Develiers",
    team: "South Africa",
    age : 40,
    retired : "true",
    run : 200  
  })

  return (

    <CricketerContext.Provider value= {{
      cricketer : cricketer,
      setCricketer : setCricketer
    }}>
      {props.children}
    </CricketerContext.Provider>

  )
}

export default CricketerProvider


// For this we store the only one value of CricketerContext object
{/* <CricketerContext.Provider value= "Sachin Tendulker">
{props.children}
</CricketerContext.Provider> */}