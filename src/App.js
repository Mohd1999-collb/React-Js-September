import React from "react";

import UseStateWithVariable from "./Component/UseState/UseStateWithVariable";
import USeStateWithObject from "./Component/UseState/USeStateWithObject";
import UseStateWithArray from "./Component/UseState/UseStateWithArray";
import FormValidation from "./Component/UseState/FormValidation";
import LazyState from "./Component/UseState/LazyState";
import ChildToParentProps from "./Component/UseState/ChildToParentProps";
import CountWithUseEffect from "./Component/UseEffect/CountWithUseEffect";
import WeatherAppWithUseEffect from "./Component/UseEffect/WeatherAppWithUseEffect";
import Axios from "./Component/Axios/AxiosBasic";
import AxiosBasic from "./Component/Axios/AxiosBasic";
import UnsplashImagesUsingAxios from "./Component/Axios/UnsplashImagesUsingAxios";

import './Style/usestate.css'
import ParentElement from "./Component/ParentAndChildren/ParentElement";
import Player from "./Component/Context_API/Player";
import CricketerProvider from "./Component/Context_API/CricketerProvider";
import UseThemeSwitch from "./Component/Context_API/SwitchTheme/UseThemeSwitch";
import ThemeProvider from "./Component/Context_API/SwitchTheme/ThemeProvider";
import Navbar from "./Component/Routing/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./Component/Routing/About";
import Home from "./Component/Routing/Home";
import Nomatch from "./Component/Routing/Nomatch";



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
            {/* <WeatherAppWithUseEffect/> */}
            {/* <AxiosBasic/> */}
            {/* <UnsplashImagesUsingAxios/> */}
            {/* <ParentElement/> */}

            {/*Context Api */}
            {/* <CricketerProvider>
                <Player />
            </CricketerProvider> */}

            {/* <ThemeProvider>
                <UseThemeSwitch />
            </ThemeProvider> */}
            <Navbar/>
        </div>
    )
}


export default App;