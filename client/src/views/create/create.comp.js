
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './create.css';
import { createDog, getTemperament } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";



function Create() {

  const dispatch = useDispatch();

  useEffect(() => { //para que nuestra action sea ejecutada cuando la pagina se carga por primera vez hacemos el dispach dentro de useEffect
    dispatch(getTemperament());
  }, [dispatch]);

  const dogTemperaments = useSelector((state) => state.dogTemperaments);

  const history = useHistory();

  const [dogId, setDogId] = useState("")
  const [input, setInput] = useState({
    nombre: "",
    altura_min: "",
    altura_max: "",
    peso_min: "",
    peso_max: "",
    vida: "",
    temperamentos: "",
  })

  const [error, setError] = useState({
    nombre: "",
    altura_min: "",
    altura_max: "",
    peso_min: "",
    peso_max: "",
    vida: "",
    temperamentos: "",
  })

  const validate = (input) => {

    //name
    let error = {};
    if (!input.name) {
      setError({ ...error, name: 'debes ponerle un nombre' })
    } else if (!/[A-Z]+$/i.test(input.name)) {
      setError({ ...error, name: 'solo puede contener letras' })
    } else if (parseInt(input.name.length) >= 25) {
      setError({ ...error, name: 'debe contener menos de 25 caracteres' })
    }

    //Altura
  // if(!input.height_min) {
  //   setError({...error, height_max: "altura max requerida" })
  // } else if(parseInt(input.height_max) > 85) {
  //   setError({...error, height_max : 'debe ser menor a 85 CM' })
  // } else if(!/^[0-9]+$/.test(input.height_max)) {
  //   setError({...error, height_max: 'solo puede contener numeros'})
  // }


  }


  const handleCreation = (e) => {   //para que cuando le haga click en mi imput, me haga un filtrado de todos los "dogs", con el nombre que asigno dentro del imput (e.tajget.value)
    e.preventDefault();
    dispatch(createDog(input));
    history.push('/home/' + dogId);
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });

    validate({
      ...input,
      [e.target.name]: e.target.value  //a la misma vez que escribe, esta validando si es correcto lo escrito
    })
  }


  return (
    <image src="CrearDogs.jpg" > 
    <div className='Form_container'>
      <Link to="/home"><button>HOME</button></Link>
      <p className='datos_obligatorios'>Crea tu Nuevo Perro</p>
      <form onSubmit={""} className='form_create'>
        <div>
          <label>Nombre: </label>
          <input name="nombre" value={input.value} onChange={handleChange} />
          <span>{error.name}</span>
        </div>
        <div>
          <label>Altura min: </label>
          <input name="altura_min" value={input.value} onChange={handleChange} />
        </div>
        <div>
          <label>Altura max: </label>
          <input name="altura_max" value={input.value} onChange={handleChange} />
        </div>
        <div>
          <label>Peso min: </label>
          <input name="peso_min" value={input.value} onChange={handleChange} />
        </div>
        <div>
          <label>Peso max: </label>
          <input name="peso_max" value={input.value} onChange={handleChange} />
        </div>
        <div>
          <label>Vida: </label>
          <input name="vida" value={input.value} onChange={handleChange} />
        </div>
        <div>
          <label>Temperamentos escoge varios(ctrl + click): </label>
        </div>
        <div>
          <select className='select_form' name="temperamentos" multiple value={input.value} onChange={handleChange}>
            {dogTemperaments?.map(temperamento => {
              return (
                <option value={temperamento} >{temperamento}</option>
              )
            })}
          </select>
        </div>

      </form>
      <button type='submit' onClick={handleCreation}>Crear nueva Dog</button>
    </div>
    </image>
  );
}

export default Create;

