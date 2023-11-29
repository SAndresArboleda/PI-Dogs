import './home.css';

import Cards from "../../components/cards/cards.comp";
import Navbar from "../../components/navbar/navbar.comp";



function Home() {
  return (
    <div className="home">
      <h2 className="home-title">Home</h2>
      <Navbar/>
      <Cards/>
    </div>
  );
}

export default Home;