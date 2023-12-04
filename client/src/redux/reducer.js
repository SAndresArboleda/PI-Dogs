import {
    GET_DOGS,
    GET_DOGS_BY_NAME,
    GET_DOGS_BY_ID,
    DOG_POST,
    GET_TEMPERAMENT,
    GET_ORDER,
    ORDER_BY_WEIGHT,

} from "./action";


let initialState = {
    allDogs: [],
    dogsCopy: [],
    temperamentDogs: [],
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
                temperamentDogs: action.payload
            }

        case 'GET_ORDER':
            let orderCopy = [...state.allDogs];
            if (action.payload === 'name_asc') {
                orderCopy.sort((a, b) => {
                    if (a.name > b.name) return 1;
                    else return -1;
                });
            } else if (action.payload === 'name_des') {
                orderCopy.sort((a, b) => {
                    if (a.name < b.name) return 1;
                    else return -1;
                });
            }

            return {
                ...state,
                allDogs: orderCopy,
            }

        case ORDER_BY_WEIGHT:
            let orderDogsKg = action.payload === 'peso_asc' ?
                state.allDogs.slice().sort(function (a, b) {
                    
                    if (parseInt(a.peso.split(' - ')) < parseInt(b.peso)) { return -1 }
                    if (parseInt(b.peso) < parseInt(a.peso)) { return 1 }
                    return 0;
                }) :
                state.allDogs.slice().sort(function (a, b) {
                    if (parseInt(a.peso) > parseInt(b.peso)) { return -1 }
                    if (parseInt(a.peso) > parseInt(b.peso)) { return 1 }
                    return 0;
                })
            return {
                ...state,
                dogs: orderDogsKg
            }

        // case ORDER_ASC:
        //     return {
        //         ...state,
        //         allDogs: action.payload.filter(function (a, b) {
        //             if (a.name > b.name) { return 1 }
        //             return -1
        //           })
        //     }

        // case ORDER_DESC:
        //     return {
        //         ...state,
        //         allDogs: action.payload.filter(function (a, b) {
        //             if (a.name < b.name) { return 1 }
        //             return -1
        //           })
        //     }

        default:
            return { ...state }
    }

}

export default rootReducer;



//rootReducer, es una funcion que va a tomar al estado y segundo va a tomar una action (funcion)