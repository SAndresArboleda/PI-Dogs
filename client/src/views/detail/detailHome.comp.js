import './detailHome.css';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getDogById } from "../../redux/action";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

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

        <div className='titleDet'>
          <p>{dog.nombre} </p>
        </div>

        <div>
          <img className="cardImage" src={dog.image
            ? `https://cdn2.thedogapi.com/images/${dog.image}.jpg`
            : defaultImage} />
        </div>

        <div className='temperDetail'>
          <p>temperamento: {dog.temperamento} </p>
        </div>

        <div className='textDetail'>
          <p>altura min: {dog.altura_min} </p>
          <p>altura max: {dog.ltura_max} </p>
          <p>peso min(kg): {dog.peso_min} </p>
          <p>peso max(kg): {dog.peso_max} </p>
          <h5>vida: {dog.vida} </h5>
        </div>
      </div>
    );
  }

  return (
    <div className="DetailContainer">
      {allDogs?.map(dog =>
        <Detail dog={dog} />)}
      <Link to={"/home"}><button >Home</button></Link>
    </div>
  );
}

export default Detalle;