import React from "react";
import {removeCity} from "../actions/removeCity";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {updateCity} from "../actions/updateCity";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        display: "inline-block",
        margin: "10px",
        marginLeft: 0
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    cont: {
        display: "flex",
        alignItems: "center"
    }
});

function WeatherDisplay(props) {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    if(props.cities.length>0) {
        return (
            <div>
                {props.cities.map((item, index) =>
                    <Card key={index} className={classes.root}>
                        <CardContent>
                            <Typography className={classes.cont} variant="h5" component="h2">
                                {props.cities[index].name} <img src={"http://openweathermap.org/img/wn/"+props.cities[index].weather[0].icon+".png"} alt=""/>
                            </Typography>
                            <Typography variant="body1" component="p">
                                Температура: {props.cities[index].main.temp}
                                <br/>
                                По ощущению: {props.cities[index].main.feels_like}
                                <br/>
                                Влажность: {props.cities[index].main.humidity} мм. рт. ст.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">More</Button>
                            <Button size="small" onClick={updateCity(props.cities[index])}>Update</Button>
                            <Button size="small" onClick={removeCity(props.cities[index].dt)}>Remove</Button>
                        </CardActions>
                    </Card>
                )}
            </div>
        );
    } else {
        return(
            <div>
                Loading...
            </div>
        )
    }
}

export default WeatherDisplay;