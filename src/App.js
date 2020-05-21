import React, {useEffect, useState} from 'react';
import WeatherDisplay from './components/WeatherDisplay'
import AddCity from "./containers/AddCity";
import {useDispatch, useSelector} from "react-redux";
import {fetchCities} from "./actions/fetchCities";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    App: {
        minWidth: 275,
        display: "inline-block",
        margin: "10px"
    }
});

function App() {
    const classes = useStyles();
    const [cities, setCities] = useState([])
    const citiesSelector = useSelector(state => state)
    const dispatch = useDispatch();
    const getCities = () => dispatch(fetchCities())
    useEffect(() => {
        getCities()
    }, [])

    return (
            <div className={classes.App}>
                <header>
                    <h1>React Weather</h1>
                </header>
                <main>
                    <div>
                        <AddCity/>
                        <WeatherDisplay cities={citiesSelector.cities}/>
                    </div>
                </main>
            </div>
    );
}

export default App;
