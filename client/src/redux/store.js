import {createStore, appyMiddleware, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))











//rootReducer, es el reducer raiz.
//composeWithDevTools, es una funcion extra que queremos que realice o con la que cuente nuestra store
//thunk es un middlware , es una funcion para que redux trabaje con asincronia.
