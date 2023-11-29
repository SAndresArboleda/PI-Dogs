import Card from '../card/card.comp';
import './cards.css';

function Cards() {
  return (
    <div className="card-list">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  );
}

export default Cards;