import Card from '../card/card.comp';
import './cards.css';

function Cards() {
  return (
    <div className="App">
      <p>Estas son las Cards</p>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  );
}

export default Cards;