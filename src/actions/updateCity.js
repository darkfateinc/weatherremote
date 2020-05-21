import * as firebase from "firebase";

export function updateCity(city){
    return function (dispatch) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.name}&units=metric&appid=71a32f5b757328f2a8a0092508ed2e1b`)
            .then( res =>{
                return res.json()
            })
            .then(JSONRes => {
                firebase.database().ref('cities/' + city.id).update(JSONRes)
            }).catch(err => {
            console.log(err)
        })
    }
}