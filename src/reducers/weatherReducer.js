import * as firebase from "firebase";

const weatherInfo = (state = {

    weatherInfo: {},
    cities: []

}, action) => {
    if(action.type === "FETCH_WEATHER"){
        state = {...state, weatherInfo: action.payload};
    }
    if(action.type === "FETCH_CITIES") {
        state = {...state, cities: action.payload};
    }
    return state;
}

export default weatherInfo;