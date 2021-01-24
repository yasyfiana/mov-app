import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DetailPage from './components/DetailPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/detail" component = {DetailPage} />
          <Route path="/" component = {LandingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
