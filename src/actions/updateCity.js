import * as firebase from "firebase";

export function updateCity(city){
    return function (dispatch) {
        firebase.database().ref('cities/' + city.dt).update(city)
    }
}