import './card.css';
import defaultImage from '../../assets/img/default_img.jpg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Card = ({ dog }) => {
// const imagenPng = if()

  return (
    <Link to={`/home/${dog.id}`} className="link">
      <div className="card-container">
        <p className='titleCard'>{dog.nombre} </p>
        <img className="cardImage" src={dog.image ? `https://cdn2.thedogapi.com/images/${dog.image}.jpg`: defaultImage}/>
        <div className='carcaterTempCard'>
          <p>temperamento: {dog.temperamento} </p>
        </div>
        <div className='carcateristCard'>
          <p>peso minimo (kg): {dog.peso_min} </p>
          <p>peso maximo (kg): {dog.peso_max} </p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
