import axios from "axios"

export const GET_DOGS = "GET_DOGS"


export function getDogs(){
    return async function (dispatch){
        const response = await axios();
        return dispatch({
            type:"GET_DOGS",
            payload: response.data
        })
    };
}



//las action son funciones para llenar las tarjetas de informacion
//action: funcion de forma asincrona, que ocupa un dispatch con el que recibe una respuesta de una fuente externa (nuestro backend)