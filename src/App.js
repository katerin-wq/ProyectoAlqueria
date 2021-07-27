import './App.css';
import GlobalStyles from './globalStyles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import pagina1 from './pages/page1/iniciarsesion'
import pagina2 from './pages/page2/registro'
import pagina3 from './pages/page3/opciones'
import pagina4 from './pages/page4/granjasactuales'
import pagina5 from './pages/page5/nuevagranja'
import pagina6 from './pages/page6/produccion'

function App() {
  return (
    <div className="App">
    <Router>
      <GlobalStyles/>
      <Switch>
        <Route path="/iniciarsesion" exact component={pagina1}/>
        <Route path="/" exact component={pagina2}/>
        <Route path="/opciones" exact component={pagina3}/>
        <Route path="/granjasactuales" exact component={pagina4}/>
        <Route path="/nuevagranja" exact component={pagina5}/>
        <Route path="/produccion" exact component={pagina6}/>
      </Switch>
    </Router>
    </div>
  )
}
export default App;