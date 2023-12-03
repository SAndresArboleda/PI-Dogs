import './detailHome.css';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getDogById } from "../../redux/action";
import { useParams } from "react-router-dom";

import defaultImage from '../../assets/img/default_img.jpg';


const Detalle = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { allDogs } = useSelector(state => state);


  useEffect(() => {
    dispatch(getDogById(id));
  }, []);

  const Detail = ({ dog }) => {

  return (
    <div className='card-contain'>
      <h2>{dog.nombre} </h2>
      <img className="cardImage" src= {dog.image
      ?`https://cdn2.thedogapi.com/images/${dog.image}.jpg`
      :defaultImage
    }
        />
      <h4>temperamento: {dog.temperamento} </h4>
      <h5>altura: {dog.altura} </h5>
      <h5>peso(kg): {dog.peso} </h5>
      <h5>vida: {dog.vida} </h5>
    </div>
  );
}

  return (
    <div className="App">
      {allDogs?.map(dog =>
        <Detail dog={dog} />)}
        <button >Home</button>
    </div>
  );
}

export default Detalle;