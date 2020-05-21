import * as firebase from "firebase";

export function fetchCities(){
    return function (dispatch) {
        firebase.database().ref('cities').on("value", (snp)=>{
            var data = [];
            snp.forEach(ss => {
                data.push(ss.val());
            });
            dispatch({
                type: "FETCH_CITIES",
                payload: data
            })
        })
    }
}