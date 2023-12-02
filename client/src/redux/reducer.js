import { GET_DOGS, GET_DOGS_BY_NAME, GET_DOGS_BY_ID } from "./action";


let initialState = {allDogs:[]}

function rootReducer(state=initialState, action){
    switch(action.type){

        case GET_DOGS:
            return{
                
                allDogs:action.payload
            };

        case GET_DOGS_BY_NAME:
            return{
                ...state,
                allDogs:action.payload
            }
            
        case GET_DOGS_BY_ID:
            return{
                ...state,
                allDogs:action.payload
            }
        
        default:
            return {...state}
    }

}

export default rootReducer;



//rootReducer, es una funcion que va a tomar al estado y segundo va a tomar una action (funcion)