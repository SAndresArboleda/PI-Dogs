//import './home.css';

import Cards from "../../components/cards/cards.comp";
import Navbar from "../../components/navbar/navbar.comp";



function Home() {
  return (
    <div className="App">
      <p>Soy el Home</p>
      <Cards/>
      <Navbar/>
    </div>
  );
}

export default Home;