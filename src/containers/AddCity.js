import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {fetchWeather} from "../actions/fetchWeather";
import {saveCity} from "../actions/saveCity";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    btn: {
        margin: "5px",
        minWidth: "210px",
        marginLeft: 0
    }
});

function AddCity() {
    const classes = useStyles();
    const [city, setCity] = useState([])
    const dispatch = useDispatch();
    const getWeatherAction = (city) => dispatch(fetchWeather(city))
    //const saveWeather = (city) => dispatch(saveCity(city))
    const saveCityWeather = (e) => {
        e.preventDefault();
        //saveWeather(city);
        getWeatherAction(city);
    }
    return (
        <form onSubmit={saveCityWeather}>
            <div>
                <TextField type="text" variant="outlined" onChange={ e => setCity( e.target.value ) }/>
            </div>
            <Button className={classes.btn} variant="contained" type="submit">ADD</Button>
        </form>
    )
}

export default AddCity;