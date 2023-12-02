//import './card.css';
import defaultImage from '../../assets/img/default_img.jpg';


const Detail = ({ dog }) => {

  return (
    <div>
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

export default Detail;