import { GET_DOGS } from "./action";


let initialState = {allDogs:[], alltemperaments:[]}

function rootReducer(state=initialState, action){
    switch(action.type){
        case GET_DOGS:
            return{
                ...state,
                allDogs:action.payload,
                alltemperaments:action.payload,
            };
        default:
            return {...state}
    }
}

export default rootReducer;



//rootReducer, es una funcion que va a tomar al estado y segundo va a tomar una action (funcion)