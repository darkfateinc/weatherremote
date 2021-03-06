import * as firebase from "firebase";
const API_KEY ='71a32f5b757328f2a8a0092508ed2e1b';

export function fetchWeather(city){
    return function (dispatch) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
            .then( res =>{
                return res.json()
            })
            .then(JSONRes => {
                if(JSONRes.cod===200){
                    firebase.database().ref('cities/' + JSONRes.id).set(JSONRes);
                } else {
                    alert("Nothing find")
                }
            }).catch(err => {
                console.log(err)
        })
    }
}