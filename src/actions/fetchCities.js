import * as firebase from "firebase";

//Запрос в базу - идет цикл, при каждой итерации - запрос новой погоды по текущему городу.
//Т.е. каждый раз при получении сохраненных городов - погода в них обновляется.
export function fetchCities(){
    return function (dispatch) {
        firebase.database().ref('cities').on("value", (snp)=>{
            let data = [];
            snp.forEach(ss => {
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ss.val().name}&units=metric&appid=71a32f5b757328f2a8a0092508ed2e1b`)
                    .then( res =>{
                        return res.json()
                    })
                    .then(JSONRes => {
                        firebase.database().ref('cities/' + ss.val().id).set(JSONRes);
                    }).catch(err => {
                    console.log(err)
                })
                data.push(ss.val());
            });
            dispatch({
                type: "FETCH_CITIES",
                payload: data
            })
        })
    }
}