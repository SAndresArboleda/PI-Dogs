import { useEffect } from "react";  //nos ayuda a controlar el ciclo de vida en la se realiza la funcionalidad de mi pagina
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../redux/action";

import Cards from "../../components/cards/cards.comp";
import Navbar from "../../components/navbar/navbar.comp";

import './home.css';

//1.para ocupar el dispach, traer el hook y guardarlo en una variable
function Home() {
  const dispatch = useDispatch();   //Dispach es la forma como le comunico algo a mi store
  const allDogs = useSelector((state) => state.allDogs); //una vez que se modifica el estado se envia a todos los componentes subscritos al estado. 
  //con useSelector indico a que estado quiero estar subscrito, para ervisar sus cambios
  //alDogs es un componente global porque esta subscrito en el redux(que es donde estan los componentes globales)/en reducer.

  useEffect(() => { //para que nuestra action sea ejecutada cuando la pagina se carga por primera vez hacemos el dispach dentro de useEffect
    dispatch(getDogs());
  }, [dispatch]); //esto es array de dependencia, para decir que se ejecute la funcion getDogs, al momento de hacer el dispach. 

  // return (()=>{   //consultar como hacerlo para el PI
  //   clearDetail()  //esto es para limpiar el estado cuando pase a otra pagina
  // })

  return (
    <div className="home">
      <h2 className="home-title">Home</h2>
      <Navbar />
      <Cards allDogs={allDogs}/>
    </div>
  );
}

export default Home;