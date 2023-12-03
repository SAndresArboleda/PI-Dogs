import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './create.css';

import { useState } from "react";



function Create() {
  const [input, setInput] = useState({
    name: "",
    //height.metric: "",
    //weight.metric: "",
    //life_span: "",
    Temperament:""
  })


  const [error, setError] = useState({
    name: "",
    // height.metric: "",
    // "weight.metric": "",
    // "life_span": "",
    Temperament:""
  })

  const validate= (input)=>{

  }

  function handleChange(e) {

    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="home">
      <Link to="/home"><button>HOME</button></Link>
      <p>Crea tu Nuevo Perro</p>
      <form onSubmit={""} >
        <div>
          <label>Nombre: </label>
          <input name="name" value={input.value} onChange={handleChange} />
        </div>
        <div>
          <label>Altura: </label>
          <input name="height.metric" value={input.value} onChange={handleChange} />
        </div>
        <div>
          <label>Peso: </label>
          <input name="weight.metric" value={input.value} onChange={handleChange} />
        </div>
        <div>
          <label>Vida: </label>
          <input name="life_span" value={input.value} onChange={handleChange} />
        </div>
        <div>
          <label>Temperamento: </label>
          <input name="Temperament" value={input.value} onChange={handleChange} />
        </div>
      </form>
      <button>Crear nueva Dog</button>
    </div>
  );
}

export default Create;

//   Nombre.
// Altura (diferenciar entre altura mínima y máxima de la raza).
// Peso (diferenciar entre peso mínimo y máximo de la raza).
// Años de vida.
// Posibilidad de seleccionar/agregar varios temperamentos en simultáneo.
// Botón para crear la nueva raza