//import './detail.css';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Detail from "../../components/detail/detail.comp";
import { getDogById } from "../../redux/action";

function DetailHome() {

  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);

  useEffect(() => {
  
    dispatch(getDogById(2));
  }, [dispatch]);


    return (
      <div className="App">
        <p>Soy el Detail</p>
        {allDogs?.map(dog =>
        <Detail dog={dog}/>)}
        
      </div>
    );
  }
  
  export default DetailHome;