import axios from "axios"
const {API_KEY} = process.env

export const GET_DOGS = "GET_DOGS"


export function getDogs(){
    return async function (dispatch){
        const response = await axios(`https://api.thedogapi.com/v1/breeds`);
        return dispatch({
            type:"GET_DOGS",
            payload: response.data
        })
    };
}



//las action son funciones para llenar las tarjetas de informacion
//action: funcion de forma asincrona, que ocupa un dispatch con el que recibe una respuesta de una fuente externa (nuestro backend)