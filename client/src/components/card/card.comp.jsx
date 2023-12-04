import './card.css';
import defaultImage from '../../assets/img/default_img.jpg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Card = ({ dog }) => {

  return (
    <Link to={`/home/${dog.id}`} className="link">
    <div className="card-container">
      <h2>{dog.nombre} </h2>
      <img className="cardImage" src= {dog.image ?`https://cdn2.thedogapi.com/images/${dog.image}.jpg`:defaultImage }
        />
      <h4>Grupo: {dog.grupo} </h4>
      <h4>temperamento: {dog.temperamento} </h4>
      <h5>peso minimo (kg): {dog.peso_min} </h5>
      <h5>peso maximo (kg): {dog.peso_max} </h5>
    </div>
    </Link>
  );
}

export default Card;
