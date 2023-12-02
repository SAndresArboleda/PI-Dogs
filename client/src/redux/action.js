import axios from "axios"
const {API_KEY} = process.env



export function getDogsByName(name) {
    return async function (dispatch) {
        const { data } = await axios.get(`http://localhost:3001/dogs?name=${name}`);
        return dispatch({
            type: GET_DOGS_BY_NAME,
            payload: data
        });
    };
}

export function getDogs(){
    return async function (dispatch){
        const response = await axios(`http://localhost:3001/dogs`);
        return dispatch({
            type: GET_DOGS,
            payload: response.data
        })
    };
}

export function getDogById(id){
    return async function (dispatch){
        const response = await axios(`http://localhost:3001/dogs/${id}`);
        return dispatch({
            type: GET_DOGS_BY_ID,
            payload: response.data
        })
    };
}

export const GET_DOGS = "GET_DOGS"
export const GET_DOGS_BY_NAME ="GET_DOGS_BY_NAME"
export const GET_DOGS_BY_ID ="GET_DOGS_BY_ID"


//las action son funciones para llenar las tarjetas de informacion
//action: funcion de forma asincrona, que ocupa un dispatch con el que recibe una respuesta de una fuente externa (nuestro backend)