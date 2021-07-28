import './App.css';
import GlobalStyles from './globalStyles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import pagina1 from './pages/page1/iniciarsesion'
import pagina2 from './pages/page2/registro'

function App() {
  return (
    <div className="App">
    <Router>
      <GlobalStyles/>
      <Switch>
        <Route path="/iniciarsesion" exact component={pagina1}/>
        <Route path="/" exact component={pagina2}/>
      </Switch>
    </Router>
    </div>
  )
}
export default App;