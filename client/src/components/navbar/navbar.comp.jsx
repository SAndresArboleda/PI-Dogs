import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { orderDogs, orderByWeight} from "../../redux/action";

import './navbar.css';


function Navbar({handleChange, handleSubmit}) {

  const dispatch = useDispatch();

    function handleOrder(e){
      const value = e.target.value;
        dispatch(orderDogs(value))
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