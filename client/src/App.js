import {Route, Switch} from "react-router-dom"


import Create from './views/create/create.comp';
import Detail from './views/detail/detailHome.comp';
import Home from './views/home/home.comp';
import LandingPage from "./views/landing/landing.comp";

import './App.css';



function App() {
  return (
    <div className="">
      <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path="/home" component={Home} />
      <Route path="/home/:id" component={Detail} />
      <Route path="/create" component={Create} />
      </Switch>
    </div>
  );
}

export default App;


//BrowserRouter para que funcione la navegacion
//el "exact" em la ruta de Home, es para evitar que se pisen la ruta Home y la Detail, ya que empiezan 
//con la misma direccion "/home". o se puede no poner el exact path y encerrar todas nuestras rutas en switch.
//pero el switch ya no se usa.
