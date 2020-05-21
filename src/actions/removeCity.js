import * as firebase from "firebase";

export function removeCity(id){
    return function (dispatch) {
        firebase.database().ref('cities/' + id).set(null)
    }
}