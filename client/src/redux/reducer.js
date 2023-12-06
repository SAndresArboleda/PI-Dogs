import {
    GET_DOGS,
    GET_DOGS_BY_NAME,
    GET_DOGS_BY_ID,
    DOG_POST,
    GET_TEMPERAMENT,
    GET_ORDER,
    GET_DOGS_API,
    GET_DOGS_BD,



} from "./action";


let initialState = {
    allDogs: [],
    dogsCopy: [],
    dogTemperaments: [],
    dogId: '',
    ordenDogs: [],


}

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case GET_DOGS:
            return {
                ...state,
                allDogs: action.payload,

            };

        case GET_DOGS_BY_NAME:
            return {
                ...state,
                allDogs: action.payload,
                dogsCopy: action.payload
            }

        case GET_DOGS_BY_ID:
            return {
                ...state,
                allDogs: action.payload
            }

        case DOG_POST:
            return {
                ...state,
                dogId: action.payload
            }

        case GET_TEMPERAMENT:
            return {
                ...state,
                dogTemperaments: action.payload
            }

        case GET_ORDER:
            let orderCopy = [...state.allDogs];
            if (action.payload === 'name_asc') {
                orderCopy.sort((a, b) => {
                    if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) return 0;
                    else return -1;
                });
            } else if (action.payload === 'name_des') {
                orderCopy.sort((a, b) => {
                    if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) return 1;
                    else return -1;
                });
            } else if (action.payload === 'peso_asc') {
                orderCopy.sort(function (a, b) {
                    if (parseInt(a.peso_min) < parseInt(b.peso_min)) { return -1 }
                    if (parseInt(b.peso_min) < parseInt(a.peso_min)) { return 1 }
                    return 0;
                })
            } else if (action.payload === 'peso_des') {
                orderCopy.sort(function (a, b) {
                    if (parseInt(a.peso_min) > parseInt(b.peso_min)) { return -1 }
                    if (parseInt(b.peso_min) > parseInt(a.peso_min)) { return 1 }
                    return 0;
                })
            }
            return {
                ...state,
                allDogs: orderCopy,
            }
        case GET_DOGS_API:
            return {
                ...state,
                allDogs: action.payload,
            };

        case GET_DOGS_BD:
            return {
                ...state,
                allDogs: action.payload,
            };


        default:
            return { state }
    }

}

export default rootReducer;



//rootReducer, es una funcion que va a tomar al estado y segundo va a tomar una action (funcion)