import React from "react";

import UseStateWithVariable from "./Component/UseState/UseStateWithVariable";
import USeStateWithObject from "./Component/UseState/USeStateWithObject";
import UseStateWithArray from "./Component/UseState/UseStateWithArray";
import FormValidation from "./Component/UseState/FormValidation";
import LazyState from "./Component/UseState/LazyState";
import ChildToParentProps from "./Component/UseState/ChildToParentProps";
import CountWithUseEffect from "./Component/UseEffect/CountWithUseEffect";
import WeatherAppWithUseEffect from "./Component/UseEffect/WeatherAppWithUseEffect";

import './Style/usestate.css'



const App = () => {
    return (
        <div>
            {/* <UseStateWithVariable /> */}
            {/* <USeStateWithObject /> */}
            {/* <UseStateWithArray/> */}
            {/* <FormValidation/> */}
            {/* <LazyState/> */}
            {/* <ChildToParentProps/> */}
            {/* <CountWithUseEffect/> */}
            <WeatherAppWithUseEffect/>
        </div>
    )
}


export default App;