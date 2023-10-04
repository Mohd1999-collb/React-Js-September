import React, { useState } from 'react'
import CreateThemeContext from './CreateThemeContext'

const ThemeProvider = (props) => {

    const [light, setLight] = useState({
        backgroundColor: 'white',
        color: 'red',
        textAlign: "left",
        border: '4px solid green',
        margin: '10px'
    })


    return (
        <CreateThemeContext.Provider value={{
            light: light,
            dark: () => setLight({
                ...light,
                backgroundColor: 'black',
                color: 'white',
                textAlign: "center",
                border: '10px solid blue',
                margin: '20px'
            }),

            twilight: () => setLight({
                ...light,
                backgroundColor: 'orange',
                color: 'brown',
                textAlign: "right",
                border: '2px solid blue',
                margin: '15px'
            })
        }} >
            {props.children}
        </CreateThemeContext.Provider>
    )
}

export default ThemeProvider