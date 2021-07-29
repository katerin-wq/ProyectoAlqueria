import './App.css';
import GlobalStyles from './globalStyles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import iniciarsesion from './pages/iniciarsesion/iniciarsesion'
import registro from './pages/registro/registro'
import opciones from './pages/opciones/opciones';
import nuevagranja from './pages/nuevagranja/nuevagranja'
import nuestrasgranjas from './pages/nuestrasgranjas/nuestrasgranjas'

function App() {
  return (
    <div className="App">
    <Router>
      <GlobalStyles/>
      <Switch>
        <Route path="/opciones" exact component={opciones}/>
        <Route path="/" exact component={registro}/>
        <Route path="/iniciarsesion" exact component={iniciarsesion}/>
        <Route path="/nuevagranja" exact component={nuevagranja}/>
        <Route path="/nuestrasgranjas" exact component={nuestrasgranjas}/>
      </Switch>
    </Router>
    </div>
  )
}
export default App;