import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Alert variant="info" style={{position: 'fixed', marginLeft: '10%', width: '80%', marginTop: '10px',  zIndex: '30'}}>
            If the links to the data visualizations don't work, go to the README in the {' '}
            <Alert.Link href="https://github.com/nicolasf10/tv-shows">GitHub repository</Alert.Link>.
        </Alert>
        <Switch>
          <Route path='/tv-shows/' exact component={Home}/>
          <Route path='/tv-shows/about' exact component={About}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
