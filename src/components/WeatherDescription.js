import React, {useEffect} from "react";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";

import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
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

function WeatherDescription(props) {
    const classes = useStyles();
    if(props) {
        return (
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.cont} variant="h5" component="h2">
                        {props.city.name} <img src={"http://openweathermap.org/img/wn/"+props.city.weather[0].icon+".png"} alt=""/>
                    </Typography>
                    <Typography variant="body1" component="p">
                        Температура: {props.city.main.temp}
                        <br/>
                        По ощущению: {props.city.main.feels_like}
                        <br/>
                        Влажность: {props.city.main.humidity} мм. рт. ст.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link size="small" to={"/"}>Go Back</Link>
                </CardActions>
            </Card>
        );
    } else {
        return <div>Loading...</div>
    }
}

export default WeatherDescription;