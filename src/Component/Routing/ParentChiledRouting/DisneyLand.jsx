import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Cat from './Cat'
import Dog from './Dog'
import Elephant from './Elephant'
import Monkey from './Monkey'
import Nomatch from '../Nomatch'

const DisneyLand = () => {
  return (
    <div>
        <h1>Welcome to Disneyland</h1>

        <Routes>

            <Route path='/' element={<Home/>}>
            <Route path='' element={<Cat/>}/>
            <Route path='home/dog' element={<Dog/>}/>
            </Route>

            <Route path='*' element={<Nomatch />} />

            {/* <Route path='/' element={<Cat/>}/>
            <Route path='/dog' element={<Dog/>}/>
            <Route path='/elephant' element={<Elephant/>}/>
            <Route path='/monkey' element={<Monkey/>}/> */}
        </Routes>
    </div>
  )
}

export default DisneyLand