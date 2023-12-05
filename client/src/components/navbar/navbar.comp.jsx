import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { orderDogs, orderByWeight} from "../../redux/action";
import Paginacion from "../paginacion/Paginacion"

import './navbar.css';


function Navbar({handleChange, handleSubmit, allDogs}) {

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPorPag, setItemsPorPag] = useState(4);


  const dispatch = useDispatch();
    // const handleOrder = event => {
    //     dispatch(orderDogs(event.target.value));
    // }

    function handleOrder(e){
      const value = e.target.value;
        dispatch(orderDogs(value))
        
      // if(value === " Id"){
      //   dispatch(orderById(value))
      // }
    }

  return (
    <div className="search-box">
      <form onChange={handleChange} >
      <select
          name="order"
          id="order"
          onChange={handleOrder}
          >
          {/* <option value="Id">Orden Inicial Id</option> */}
          <option value="name_asc">Nombre Ascendent</option>
          <option value="name_des">Nombre Descendent</option>
          <option className='option_name' value="peso_asc">Peso Ascendent</option>
          <option className='option_name' value="peso_des">Peso Descendent</option>
      </select>
      {/* <button onClick={handleDescSort}>Descendente</button> */}
        <input placeholder='Busqueda' type='search'/>
        <button type='submit' onClick={handleSubmit}>Buscar</button>
      </form>
      <div>
      <Paginacion itemsPorPag={itemsPorPag} totalPosts={allDogs} paginate={setCurrentPage}/>
      </div>
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