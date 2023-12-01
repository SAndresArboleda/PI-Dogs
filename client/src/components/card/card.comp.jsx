import './card.css';
import defaultImage from '../../assets/img/default_img.jpg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const T_FOTO = "jpg" || "png";

const Card = ({ dog }) => {

  return (
    <Link to={`/home/${dog.id}`} className="link">
    <div className="card-container">
      <h2>{dog.name} </h2>
      <img className="cardImage" src={dog.reference_image_id
        ? `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`
        : defaultImage }
        />
      <h4>Grupo: {dog.breed_group} </h4>
      <h4>temperamento: {dog.temperament} </h4>
      <h5>peso(kg): {dog.weight.metric} </h5>
    </div>
    </Link>
  );
}

export default Card;
