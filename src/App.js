import './App.css';
import Home from './pages/Home'
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
{/* <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> */ }
function App() {
  return (
    <div className="App">
      <Router>

        <Header />
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
