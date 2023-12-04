import {
    GET_DOGS,
    GET_DOGS_BY_NAME,
    GET_DOGS_BY_ID,
    DOG_POST,
    GET_TEMPERAMENT,
    GET_ORDER,
    ORDER_BY_WEIGHT,
    // ORDER_BY_ID

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

        case GET_ORDER:
            let orderCopy = [...state.allDogs];
            if (action.payload === 'name_asc') {
                orderCopy.sort((a, b) => {
                    if (a.nombre > b.nombre) return 0;
                    else return -1;
                });
            } else if (action.payload === 'name_des') {
                orderCopy.sort((a, b) => {
                    if (a.nombre < b.nombre) return 1;
                    else return -1;
                });
            }else if(action.payload === 'peso_asc') {
                orderCopy.sort(function (a, b) {
                    if (parseInt(a.peso_min) < parseInt(b.peso_min)) { return -1 }
                    if (parseInt(b.peso_min) < parseInt(a.peso_min)) { return 1 }
                    return 0;
                })
            }else if(action.payload === 'peso_des') {
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

        // case ORDER_BY_WEIGHT:
        //     const orderDogsKg = action.payload === 'peso_asc' ?
        //         state.allDogs.sort(function (a, b) {
        //             if (parseInt(a.peso_min) < parseInt(b.peso_min)) { return -1 }
        //             if (parseInt(b.peso_min) < parseInt(a.peso_min)) { return 1 }
        //             return 0;
        //         }) :
        //         state.allDogs.sort(function (a, b) {
        //             if (parseInt(a.peso_max) > parseInt(b.peso_max)) { return -1 }
        //             if (parseInt(a.peso_max) > parseInt(b.peso_max)) { return 1 }
        //             return 0;
        //         })
        //     return {
        //         ...state,
        //         allDogs: orderDogsKg
        //     }

        //   case ORDER_BY_ID:
        //         let orderId = [...state.allDogs];
        //         if (action.payload === 'id') {
        //             orderId.sort((a, b) => {
        //                 if (a.id > b.id) return -1;
        //             });
        //         }

        //         return {
        //             ...state,
        //             allDogs: orderId,
        //         }

        default:
            return { state }
    }

}

export default rootReducer;



//rootReducer, es una funcion que va a tomar al estado y segundo va a tomar una action (funcion)