import React from 'react'
import CreateThemeContext from './CreateThemeContext';


const UseThemeSwitch = () => {

  const { light, dark, twilight } = React.useContext(CreateThemeContext);

  return (
    <>
      <div style={{
        backgroundColor: light.backgroundColor,
        color: light.color,
        textAlign: light.textAlign,
        border: light.border,
        margin: light.margin
      }}>
        <h1>Mohan is a good boy</h1>
      </div>

      <button onClick={dark}>Chenge Dark mode</button>
      <button onClick={twilight}>Chenge Twilight mode</button>
    </>

  )
}

export default UseThemeSwitch