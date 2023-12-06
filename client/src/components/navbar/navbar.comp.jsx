import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { orderDogs, orderByWeight, getDogsApi, getDogsBD, getDogs} from "../../redux/action";

import './navbar.css';



function Navbar({handleChange, handleSubmit}) {


  const dogTemperaments = useSelector((state) => state.dogTemperaments);

  const [dogTemper, setdogTemper] = useState("")
  const dispatch = useDispatch();

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

    function handleChange(e) {
      setdogTemper({
        ...dogTemper,
        [e.target.name]: e.target.value
      });
    }

  return (
    <div className="search-box">
      <form onChange={handleChange} className="formNav">
      <select name="order" id="order" onChange={handleOrder}>
          <option value="name_asc">Ordenar por:</option>
          <option value="name_asc">Nombre Ascendent</option>
          <option value="name_des">Nombre Descendent</option>
          <option className='option_name' value="peso_asc">Peso Ascendent</option>
          <option className='option_name' value="peso_des">Peso Descendent</option>
      </select>
        <input placeholder='Busqueda' type='search'/>
        <button type='submit' onClick={handleSubmit}>Buscar</button>
        <button type="button" onClick= {event=>handleListOption(event,'api')}>Api</button>
        <button type="button" onClick={event=>handleListOption(event,'bd')}>Base Datos</button>
        <button type="button" onClick={event=>handleListOption(event,'all')}>Todos</button>
        <select>
        <option value="temperamentDogs" >Dogs Temperament</option>
        <select className='select_form' name="temperamentos">
            {dogTemperaments?.map(temperamento => {
              return (
                <option value={temperamento} >{temperamento}{handleChange}</option>
              )
            })}
          </select>
        </select>
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