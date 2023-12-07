import { useEffect } from "react";  //nos ayuda a controlar el ciclo de vida en la se realiza la funcionalidad de mi pagina
import { useDispatch, useSelector } from "react-redux";
import { getDogs, getDogsByName } from "../../redux/action";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


import Cards from "../../components/cards/cards.comp";
import Navbar from "../../components/navbar/navbar.comp";


import './home.css';

//1.para ocupar el dispach, traer el hook y guardarlo en una variable
function Home() {
  const dispatch = useDispatch();   //Dispach es la forma como le comunico algo a mi store con la intencion de afectar el estado
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


  useEffect(() => { //para que nuestra action sea ejecutada cuando la pagina se carga por primera vez hacemos el dispach dentro de useEffect
    dispatch(getDogs());
    // return (()=>{   //consultar como hacerlo para el PI
    //   clearDetail()  //esto es para limpiar el estado cuando pase a otra pagina
    // })
  }, [dispatch]); //esto es array de dependencia, para decir que se ejecute la funcion getDogs, al momento de hacer el dispach. 

  return (
    <div className="home">
      <div className="botonNavbarHome">
        <Navbar handleSubmit={handleSubmit} handleChange={handleChange} />
      </div>
      <div>
        <Cards allDogs={allDogs} />
      </div>
    </div>
  );
}

export default Home;

