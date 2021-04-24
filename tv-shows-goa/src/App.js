import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} exact component={Home}/>
          <Route path={process.env.PUBLIC_URL + '/about'} exact component={About}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
