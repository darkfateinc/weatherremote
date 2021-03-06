import React from "react";
import WeatherCard from "../containers/WeatherCard";

function WeatherDisplay(props) {

    if( props.cities.length>0 ) {
        return (
            <div>
                {props.cities.map((item) =>
                    <WeatherCard city={item} key={item.id}/>
                )}
            </div>
        );
    } else {
        return(
            <div>
                Please wait or type city...
            </div>
        )
    }
}

export default WeatherDisplay;