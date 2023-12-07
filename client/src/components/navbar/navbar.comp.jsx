import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { orderDogs, orderByWeight, getDogsApi, getDogsBD, getDogs, getTemperament, updateByTemperament} from "../../redux/action";

import './navbar.css';



function Navbar({handleChange, handleSubmit}) {

  const dispatch = useDispatch();

  useEffect(() => { //para que nuestra action sea ejecutada cuando la pagina se carga por primera vez hacemos el dispach dentro de useEffect
    dispatch(getTemperament());
  }, [dispatch])

  const dogTemperaments = useSelector((state) => state.dogTemperaments);
  const allDogs = useSelector((state) => state.allDogs);


  const [temperamentState, setTemperament] = useState("")


    function handleOrder(e){
      const value = e.target.value;
        dispatch(orderDogs(value))
    }

    function handleListOption(event, param) {
      switch (param) {
        case "api":
          dispatch(getDogsApi());
          break;
        case "bd":
          dispatch(getDogsBD());
          break;
        case "all":
          dispatch(getDogs());
          break;
      
        default:
          break;
      }
    }

    
  function temperamentChange(e) {
    dispatch(getDogs)
    console.log(e.target.value);
    const selectedTemp = e.target.value
    setTemperament( e.target.value);
    let dogList = allDogs;
    const filteredDogs = dogList.filter((elem)=>elem.temperamento?.includes(selectedTemp));
    dispatch(updateByTemperament(filteredDogs))
  }

  return (
    <div className="search-box">
      <form onChange={handleChange} className="formNav">
        <div>
      <select name="order" id="order" onChange={handleOrder}>
          <option value="name_asc" selected disabled>Ordenar por:</option>
          <option value="name_asc">Nombre Ascendent</option>
          <option value="name_des">Nombre Descendent</option>
          <option className='option_name' value="peso_asc">Peso Ascendent</option>
          <option className='option_name' value="peso_des">Peso Descendent</option>
      </select>
        </div>
        <input placeholder='Busqueda' type='search'/>
        <button type='submit' onClick={handleSubmit}>Buscar</button>
        <button type="button" onClick= {event=>handleListOption(event,'api')}>Api</button>
        <button type="button" onClick={event=>handleListOption(event,'bd')}>Base Datos</button>
        <button type="button" onClick={event=>handleListOption(event,'all')}>Todos</button>
        <div>
          <label for="cars">Temperamento</label>
          
          <select className='temperamentNavbar' name="temperamentos" onChange={temperamentChange}>
            <option selected disabled>Seleccione...</option>
            {dogTemperaments?.map(temperamento => {
              return (
                <option value={temperamento}>{temperamento}</option>
              )
            })}

          </select>
        </div>
      </form>
    </div>
  );
}

export default Navbar;

// import './navbar.css';

// function Navbar({handleChange, handleSubmit}) {
//   return (
//     <div className="search-box">
//       <form onChange={handleChange} >
//         <input placeholder='Busqueda' type='search'/>
//         <button type='submit' onClick={handleSubmit}>Buscar</button>
//       </form>
//     </div>
//   );
// }

// export default Navbar;



// import './navbar.css';

// function Navbar({filtered}) {
  
//   return (
//     <div className="search-box">
//       <searchBar allDogs={filtered}/>
//     </div>
//   );
// }

// export default Navbar;