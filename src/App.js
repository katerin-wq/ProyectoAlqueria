import React from 'react';
import './App.css';

import GlobalStyles from './globalStyles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import iniciarsesion from './pages/iniciarsesion/iniciarsesion'
import produccion from './pages/produccion/produccion.jsx'
import opciones from './pages/opciones/opciones';
import nuevagranja from './pages/nuevagranja/nuevagranja'

function App() {
  return (
  <div className="App">
    <Router>
      <GlobalStyles/>
      <Switch>
        <Route path="/ProyectoAlqueria/opciones" component={opciones}/>
        <Route path="/ProyectoAlqueria/produccion" component={produccion}/>
        <Route path="/ProyectoAlqueria/nuevagranja" component={nuevagranja}/>
        <Route path="/" exact component={iniciarsesion}/>
        <Route path="/" component={iniciarsesion}/>
      </Switch>
    </Router>
    </div>
  )
}
export default App;