import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
<link href="//db.onlinewebfonts.com/c/157c6cc36dd65b1b2adc9e7f3329c761?family=Amazon+Ember" rel="stylesheet" type="text/css" />
import { auth } from './firebase';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {console.log('App', auth.currentUser == true)}
      <Router>
        <Switch>
          <Route exact path='/signUp'>
            {/* {auth.currentUser ?
              <Redirect to='/' />
              : */}
            <SignUp />
            {/* } */}
          </Route>
          <Route exact path='/signin'>
            {/* {auth.currentUser ?
              <Redirect to='/' />
              : */}
            <SignIn />
            {/* } */}
          </Route>
          <Route exact path='/'>
            {/* {auth.currentUser !== null ?
                {console.log(auth.currentUser)} */}
            <><Header /> <Home /></>
            {/* //   : <>
            //     {console.log(auth.currentUser)}
            //     < Redirect to='/signIn' />
            //   </>
            // } */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
