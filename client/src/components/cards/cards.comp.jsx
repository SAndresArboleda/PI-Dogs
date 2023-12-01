import Card from '../card/card.comp';
import './cards.css';

function Cards({allDogs}) {  //aca recibimos a allDogs como props
  const dogsList = allDogs

  return (
    <div className="card-list">
      {dogsList?.map(dog =>
        < Card dog={dog} />)}
    </div>
  );
}

export default Cards;

// {dogsList?.map(dog=>
//   < Card dog={dog} />)}