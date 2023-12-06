import { useState } from 'react';
import Card from '../card/card.comp';
import './cards.css';

function Cards({ allDogs }) {  //aca recibimos a allDogs como props
  
  
  
  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 8;

  const indexOfLastDogs = currentPage * dogsPerPage;
  const indexOfFirstDogs = indexOfLastDogs - dogsPerPage;
  const currentDog = allDogs?.slice(indexOfFirstDogs, indexOfLastDogs);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };


  return (
    <div className="card-list">
      <div>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentDog === 1} >
          Prev
        </button>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastDogs >= allDogs} >
          Next
        </button>
      </div>
      {currentDog?.map(dog =>
        < Card dog={dog} key={dog.id} />)}
    </div>

  );
}

export default Cards;