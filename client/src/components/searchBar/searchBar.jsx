//import './searchBar.css';
import { useState } from "react";
import { getDogsByName } from "../../redux/action";
import { useDispatch } from "react-redux";



function SearchBar() {

    const dispatch = useDispatch();
    const [nameState, setNameState] = useState("");

    const ejecBusq = () => {
        if (nameState.length === 0) {
            return alert("por favor ingresar valor de busqueda")
        } else {
            dispatch(getDogsByName(nameState));
            setNameState("");
        }
    }

    return (
        <div className="search-box">

            <input
                type="search"
                placeholder="Busqueda"
                onChange={(e) => setNameState(e.target.value)}
            />
            <button type="submit" onClick={ejecBusq} >
                <span className="material-icons">search</span>
            </button>

        </div>
    );
}

export default SearchBar;