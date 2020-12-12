// import Header from './components/Header';
{/* <link href="//db.onlinewebfonts.com/c/157c6cc36dd65b1b2adc9e7f3329c761?family=Amazon+Ember" rel="stylesheet" type="text/css" /> */ }
import { useEffect } from 'react';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Search from './pages/Search';
import Cart from './pages/Cart';
import { Wrapper, Container } from './components/Container';
import { StateProvider } from './components/StateProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from './firebase';
import './App.css';
import reducer, { initState } from './components/reducer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log('Thes user is >>> ', user);
      if (user) {
        // here when the user is signed in

      } else {
        // here when the user is signed out (or doesn't signed in)
      }

    });
  }, []);
  return (
    <div className="App">
      {console.log('App\n', auth.currentUser == true)}

      <Router>
        <Wrapper margin='0 auto' maxWidth='1500px'>
          <Container fluid padding='0'>
            <StateProvider reducer={reducer} initState={initState}>
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
                  <>
                    {/* <Header />  */}
                    <Home /></>
                  {/* //   : <>
            //     {console.log(auth.currentUser)}
            //     < Redirect to='/signIn' />
            //   </>
          // } */}
                </Route>
                <Route path='/search'>
                  <Search />
                </Route>
                <Route path='/cart'>
                  <Cart />
                </Route>
              </Switch>
            </StateProvider>
          </Container>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
