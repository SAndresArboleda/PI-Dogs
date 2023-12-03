// //import './searchBar.css';
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getDogs, getDogsByName } from "../../redux/action";



// function SearchBar({ allDogs }) {

//     const dispatch = useDispatch();   //Dispach es la forma como le comunico algo a mi store

//     const [filtered, setFiltered] = useState(allDogs);  //creo un estado local que toma como su estado incial al estado global "allDogs"
//     const [searchString, setSearchString] = useState("")  //creo un estado local que corresponde al sting de lo que copio en la barrita de busqueda

//     const handleChange = (e) => {   //creo la funcion handleChange que me asigna el target.value que es el valor de lo que copio en la barrita
//         e.preventDefault();
//         setSearchString(e.target.value);
//     }
//     useEffect(() => { //para que nuestra action sea ejecutada cuando la pagina se carga por primera vez hacemos el dispach dentro de useEffect
//         dispatch(getDogs());
//         // return (()=>{   //consultar como hacerlo para el PI
//         //   clearDetail()  //esto es para limpiar el estado cuando pase a otra pagina
//         // })
//     }, [dispatch]); //esto es array de dependencia, para decir que se ejecute la funcion getDogs, al momento de hacer el dispach. 

//     const handleSubmit = (e) => {   //para que cuando le haga click en mi input, me haga un filtrado de todos los "dogs", con el nombre que asigno dentro del input (e.tajget.value)
//         e.preventDefault();
//         const filtrado = allDogs.filter((dog) => dog.nombre.includes(searchString)
//         );
//         setFiltered(filtrado)   //una vez hecho handleSubmit, se modifica mi estado local setFiltered a lo que me arroge filtered
//     }



//     return (
//         <div className="search-box">

//             <input
//                 type="search"
//                 placeholder="Busqueda"
//                 onChange={handleChange}
//             />
//             <button className="material-icons" type="submit" onClick={handleSubmit}>search </button>

//         </div>
//     );
// }
// export default SearchBar;


//SAMUEL
// function SearchBar() {

//     const dispatch = useDispatch();
//     const [nameState, setNameState] = useState("");

//     const ejecBusq = () => {
//         if (nameState.length === 0) {
//             return alert("por favor ingresar valor de busqueda")
//         } else {
//             dispatch(getDogsByName(nameState));
//             setNameState("");
//         }
//     }

//     return (
//         <div className="search-box">

//             <input
//                 type="search"
//                 placeholder="Busqueda"
//                 onChange={(e) => setNameState(e.target.value)}
//             />
//             <button type="submit" onClick={ejecBusq} >
//                 <span className="material-icons">search</span>
//             </button>

//         </div>
//     );
// }

// export default SearchBar;



