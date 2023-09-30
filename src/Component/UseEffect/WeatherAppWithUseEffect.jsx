import React, { useState, useEffect } from "react"

const WeatherAppWithUseEffect = () => {
    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");
    const [hemisphere, setHemisphere] = useState("");
    const [time, setTime] = useState("")


    function setWeather() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {

                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
                setTime(new Date().toLocaleTimeString());
                updateHemisphere(position.coords.latitude);
            })
        }
    }

    useEffect(() => {
        // if (lat > 0) {
        //     setHemisphere("Northern Hemisphere")
        // } else if (lat < 0) {
        //     setHemisphere("Southern Hemisphere")
        // } else {
        //     setHemisphere("Equator")
        // }     
        // updateHemisphere(lat);
        // console.log("first")
    }, [lat])

    function updateHemisphere(lat) {
        if (lat > 0) {
            setHemisphere("Northern Hemisphere")
        } else if (lat < 0) {
            setHemisphere("Southern Hemisphere")
        } else {
            setHemisphere("Equator")
        }
    }

    return (
        <div className='UseStateWithVariable'>
            <h1>Latitude : {lat}</h1>
            <h1>Longitude : {long}</h1>
            {/* {
                lat && updateHemisphere()
            } */}
            <h1>{hemisphere}</h1>
            <h1>{time}</h1>
            <div>
                <button onClick={setWeather}>My Location</button>
            </div>
        </div>
    )
}

export default WeatherAppWithUseEffect