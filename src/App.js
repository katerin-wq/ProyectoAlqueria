import React from 'react';
import './App.css';

import Links from "./Components/producidodiario";
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

import GlobalStyles from './globalStyles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import iniciarsesion from './pages/iniciarsesion/iniciarsesion'
import produccion from './pages/produccion/produccion.jsx'
import opciones from './pages/opciones/opciones';
import nuevagranja from './pages/nuevagranja/nuevagranja'
import nuestrasgranjas from './pages/nuestrasgranjas/nuestrasgranjas'

function App() {
  return (
  <div className="App">
  <div className="container p-4">
      <div className="row">
        <Links />
      </div>
      <div>
        <ToastContainer/>
      </div>
    </div>
    <Router>
      <GlobalStyles/>
      <Switch>
        <Route path="/opciones" exact component={opciones}/>
        <Route path="/" exact component={iniciarsesion}/>
        <Route path="/produccion" exact component={produccion}/>
        <Route path="/nuevagranja" exact component={nuevagranja}/>
        <Route path="/nuestrasgranjas" exact component={nuestrasgranjas}/>
      </Switch>
    </Router>
    </div>
  )
}
export default App;