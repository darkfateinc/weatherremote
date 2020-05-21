import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchWeather} from "../actions/fetchWeather";

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
    const weatherSelector = useSelector(state => state)
    const dispatch = useDispatch();
    const getWeatherAction = (city) => dispatch(fetchWeather(city))
    const saveCity = (e) => {
        e.preventDefault();
        getWeatherAction(city);
    }
    return (
        <form onSubmit={saveCity}>
            <div>
                <TextField type="text" variant="outlined" onChange={ e => setCity( e.target.value ) }/>
            </div>
            <Button className={classes.btn} variant="contained" type="submit">ADD</Button>
        </form>
    )
}

export default AddCity;