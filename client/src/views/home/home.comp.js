import { useEffect } from "react";  //nos ayuda a controlar el ciclo de vida en la se realiza la funcionalidad de mi pagina
import { useDispatch, useSelector } from "react-redux";
import { getDogs, getDogsByName} from "../../redux/action";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


import Cards from "../../components/cards/cards.comp";
import Navbar from "../../components/navbar/navbar.comp";


import './home.css';

//1.para ocupar el dispach, traer el hook y guardarlo en una variable
function Home() {
  const dispatch = useDispatch();   //Dispach es la forma como le comunico algo a mi store
  const allDogs = useSelector((state) => state.allDogs); //una vez que se modifica el estado se envia a todos los componentes subscritos al estado. 
  //con useSelector indico a que estado quiero estar subscrito, para ervisar sus cambios
  //alDogs es un componente global porque esta subscrito en el redux(que es donde estan los componentes globales)/en reducer.
  const [searchString, setSearchString] = useState("");  //creo un estado local que corresponde al sting de lo que copio en la barrita de busqueda



  /*FILTRAMOS CON EL BACKEND*/
  const handleChange = (e) => {   //creo la funcion handleChange que me asigna el target.value que es el valor de lo que copio en la barrita
    e.preventDefault();
    setSearchString(e.target.value);
  }
  
  const handleSubmit = (e) => {   //para que cuando le haga click en mi imput, me haga un filtrado de todos los "dogs", con el nombre que asigno dentro del imput (e.tajget.value)
    e.preventDefault();
    dispatch(getDogsByName(searchString))
  }

  // const handleAscSort = (e) => {
  //   e.preventDefault();
  //   allDogs.sort(function (a, b) {
  //     if (a.name > b.name) { return 1 }
  //     return -1
  //   });
  //   dispatch(sortDogsAscending(allDogs));
  // }

  // const handleDescSort = (e) => {
  //   e.preventDefault();
  //   allDogs.sort(function (a, b) {
  //     if (a.name < b.name) { return 1 }
  //     return -1
  //   });
  //   dispatch(sortDogsDescending(allDogs));
  // }

  //HACEMOS LA SEARCH EN HOME PARA QUE LA BARRA DE NAVEGACION QUEDE REUTILIZABLE, SI SE NECESITA USAR OTRA BARRA POR EJEMPLO EN LA PAGINA DE FAVORITOS

  // const dispatch = useDispatch();
  // const [nameState, setNameState] = useState("");

  // const [filtered, setFiltered] = useState(allDogs);  //creo un estado local que toma como su estado incial al estado global "allDos"
  // const [searchString, setSearchString] = useState("")  //creo un estado local que corresponde al sting de lo que copio en la barrita de busqueda

  // const handleChange = (e) => {   //creo la funcion handleChange que me asigna el target.value que es el valor de lo que copio en la barrita
  //   e.preventDefault();
  //   setSearchString(e.target.value);
  // }

  // const handleSubmit = (e) => {   //para que cuando le haga click en mi imput, me haga un filtrado de todos los "dogs", con el nombre que asigno dentro del imput (e.tajget.value)
  //   e.preventDefault();
  //   const filtered = allDogs.filter((dog) => dog.nombre.includes(searchString)
  //   );
  //   setFiltered(filtered)   //una vez hecho handleSubmit, se modifica mi estado local setFiltered a lo que me arroge filtered
  // }

  useEffect(() => { //para que nuestra action sea ejecutada cuando la pagina se carga por primera vez hacemos el dispach dentro de useEffect
    dispatch(getDogs());
    // return (()=>{   //consultar como hacerlo para el PI
    //   clearDetail()  //esto es para limpiar el estado cuando pase a otra pagina
    // })
  }, [dispatch]); //esto es array de dependencia, para decir que se ejecute la funcion getDogs, al momento de hacer el dispach. 

  return (
    <div className="home">
      <Link to='/home'><button >HOME</button></Link>
      <h2 className="home-title">Home</h2>
      <Link to='/create'><button>CREAR DOG</button></Link>
      <Navbar handleSubmit={handleSubmit} handleChange={handleChange}/>
      <Cards allDogs={allDogs} />

    </div>
  );
}

export default Home;

//llevamos a handleChange y a handleSubmit al archivo Navbar.compon como parametros y las usamos en la etiqueta from.



/*ESTO FUE HECHO PERO AL BUSCAR POR NOMBRE YA NO DEVUELVE TODOS LOS PERROS, GAMA*/
// import { useEffect } from "react";  //nos ayuda a controlar el ciclo de vida en la se realiza la funcionalidad de mi pagina
// import { useDispatch, useSelector } from "react-redux";
// import { getDogs } from "../../redux/action";
// import { useState } from "react";


// import Cards from "../../components/cards/cards.comp";
// import Navbar from "../../components/navbar/navbar.comp";


// import './home.css';

// //1.para ocupar el dispach, traer el hook y guardarlo en una variable
// function Home() {
//   const dispatch = useDispatch();   //Dispach es la forma como le comunico algo a mi store
//   const allDogs = useSelector((state) => state.allDogs); //una vez que se modifica el estado se envia a todos los componentes subscritos al estado. 
//   //con useSelector indico a que estado quiero estar subscrito, para ervisar sus cambios
//   //alDogs es un componente global porque esta subscrito en el redux(que es donde estan los componentes globales)/en reducer.

  

//   //HACEMOS LA SEARCH EN HOME PARA QUE LA BARRA DE NAVEGACION QUEDE REUTILIZABLE, SI SE NECESITA USAR OTRA BARRA POR EJEMPLO EN LA PAGINA DE FAVORITOS

//   // const dispatch = useDispatch();
//   // const [nameState, setNameState] = useState("");

//   const [filtered, setFiltered] = useState(allDogs);  //creo un estado local que toma como su estado incial al estado global "allDos"
//   const [searchString, setSearchString] = useState("")  //creo un estado local que corresponde al sting de lo que copio en la barrita de busqueda

//   const handleChange = (e) => {   //creo la funcion handleChange que me asigna el target.value que es el valor de lo que copio en la barrita
//     e.preventDefault();
//     setSearchString(e.target.value);
//   }

//   const handleSubmit = (e) => {   //para que cuando le haga click en mi imput, me haga un filtrado de todos los "dogs", con el nombre que asigno dentro del imput (e.tajget.value)
//     e.preventDefault();
//     const filtered = allDogs.filter((dog) => dog.nombre.includes(searchString)
//     );
//     setFiltered(filtered)   //una vez hecho handleSubmit, se modifica mi estado local setFiltered a lo que me arroge filtered
//   }

//   useEffect(() => { //para que nuestra action sea ejecutada cuando la pagina se carga por primera vez hacemos el dispach dentro de useEffect
//     dispatch(getDogs());
//     // return (()=>{   //consultar como hacerlo para el PI
//     //   clearDetail()  //esto es para limpiar el estado cuando pase a otra pagina
//     // })
//   }, [dispatch]); //esto es array de dependencia, para decir que se ejecute la funcion getDogs, al momento de hacer el dispach. 

//   return (
//     <div className="home">
//       <h2 className="home-title">Home</h2>
//       <Navbar handleSubmit={handleSubmit} handleChange={handleChange} />
//       <Cards allDogs={filtered} />

//     </div>
//   );
// }

// export default Home;

// //llevamos a handleChange y a handleSubmit al archivo Navbar.compon como parametros y las usamos en la etiqueta from.
