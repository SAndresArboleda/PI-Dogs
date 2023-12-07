import { useState } from 'react';
import Card from '../card/card.comp';
import './cards.css';

function Cards({ allDogs }) {  //aca recibimos a allDogs como props
  
  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 8;

  const indexOfLastDogs = currentPage * dogsPerPage;
  const indexOfFirstDogs = indexOfLastDogs - dogsPerPage;
  const currentDogs = allDogs?.slice(indexOfFirstDogs, indexOfLastDogs);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };


  return (
    <div className="card-list">
      {currentDogs?.map(dog =>
        < Card dog={dog}/>)}
      <div>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} >
          Prev
        </button>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastDogs >= allDogs?.length} >
          Next
        </button>
      </div>
    </div>

  );
}

export default Cards;