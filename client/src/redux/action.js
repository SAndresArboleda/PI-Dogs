import axios from "axios"
//const {API_KEY} = process.env


export function getDogsByName(name) {
  return async function (dispatch) {
    const { data } = await axios.get(`http://localhost:3001/dogs?name=${name}`);
    return dispatch({
      type: GET_DOGS_BY_NAME,
      payload: data
    });
  };
}

export function getDogs() {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/dogs`);
    return dispatch({
      type: GET_DOGS,
      payload: response.data
    })
  };
}

export function getDogById(id) {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/dogs/${id}`);
    return dispatch({
      type: GET_DOGS_BY_ID,
      payload: response.data
    })
  };
}

export const createDog = (payload) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:3001/dogs", payload);

      alert("perro creado correctamente con ID: " + response.data.id);
      return dispatch({
        type: DOG_POST,
        payload: response.data.id
      })
    } catch (error) {
      console.log(error)
      alert("perro no creado")
    }
  }
}

export const getTemperament = () => {
  return async function (dispatch) {
    try {
      let temperaments = (await axios("http://localhost:3001/temperaments")).data;
      let allTemps = temperaments.map(e => e)
      return dispatch({
        type: GET_TEMPERAMENT,
        payload: allTemps
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const orderDogs = (order) => {
  return {
    type: GET_ORDER,
    payload: order
  }
};

export const orderByWeight = (payload) => {
  return {
    type: ORDER_BY_WEIGHT,
    payload
  }
}
export function getDogsApi() {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/dogs`);
    let dogApi = response.data.filter((ele)=>{
      let result = typeof ele.id === 'number'
      return result;
    });
    return dispatch({
      type: GET_DOGS_API,
      payload: dogApi
    })
  };
}

export function getDogsBD() {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/dogs`);
    let dogBd = response.data.filter((ele)=>{
      let result = typeof ele.id !== 'number'
      return result;
    });
    return dispatch({
      type: GET_DOGS_BD,
      payload: dogBd
    })
  };
}
export const updateByTemperament = (dogListParam) => {
  return {
    type: UPDATE_BY_TEMPERAMENT,
    payload: dogListParam
  }
}


// export const orderById = (payload) => {
//   return {
//     type: ORDER_BY_ID,
//     payload
//   }
// }


export const GET_DOGS = "GET_DOGS"
export const GET_DOGS_BY_NAME = "GET_DOGS_BY_NAME"
export const GET_DOGS_BY_ID = "GET_DOGS_BY_ID"
export const DOG_POST = "DOG_POST"
export const GET_TEMPERAMENT = "GET_TEMPERAMENT"
export const GET_ORDER = "GET_ORDER"
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT"
export const GET_DOGS_API = "GET_DOGS_API"
export const GET_DOGS_BD = "GET_DOGS_BD"
export const UPDATE_BY_TEMPERAMENT = "UPDATE_BY_TEMPERAMENT"
// export const ORDER_BY_ID = "ORDER_BY_ID"


//las action son funciones para llenar las tarjetas de informacion
//action: funcion de forma asincrona, que ocupa un dispatch con el que recibe una respuesta de una fuente externa (nuestro backend)

