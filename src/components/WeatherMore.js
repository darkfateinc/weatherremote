import React from "react";
import WeatherDescription from "./WeatherDescription";

function WeatherMore(props) {
    if(props.history) {
        return (
            <WeatherDescription city={props.location.state}/>
        );
    } else {
        return null
    }
}

export default WeatherMore