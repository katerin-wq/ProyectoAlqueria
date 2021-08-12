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
        <Route path="/opciones" exact component={opciones}/>
        <Route path="/" exact component={iniciarsesion}/>
        <Route path="/produccion" exact component={produccion}/>
        <Route path="/nuevagranja" exact component={nuevagranja}/>
      </Switch>
    </Router>
    </div>
  )
}
export default App;