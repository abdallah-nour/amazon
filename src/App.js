// import Header from './components/Header';
{/* <link href="//db.onlinewebfonts.com/c/157c6cc36dd65b1b2adc9e7f3329c761?family=Amazon+Ember" rel="stylesheet" type="text/css" /> */ }

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Container, Wrapper } from './components/Container';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import reducer, { initState } from './components/reducer';
import { useEffect, useState } from 'react';

import Cart from './pages/Cart';
import Home from './pages/Home';
import Search from './pages/Search';
import SideMenu from './components/SideMenu';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { StateProvider } from './components/StateProvider';
import { auth } from './firebase';

function App() {
  const [visibleSideMenu, setVisibility] = useState(false);
  useEffect(() => {
    const usr = auth.currentUser;
    if(usr){
      console.log('there is user/ ', usr);
    }else{
      console.log("there isn't any ");
    }
    auth.onAuthStateChanged((user) => {
      console.log('The user is >>> ', user);
      if (user) {
        // here when the user is signed in
      } else {
        // here when the user is signed out (or doesn't signed in)
      }
    });
  }, [auth.user]);
  return (
    <div className="App">
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
                    <Home setSideMenuVisibility={setVisibility} /></>
                  <SideMenu visible={visibleSideMenu} setVisibility={setVisibility} />
                  {/* //   : <>
            //     {console.log(auth.currentUser)}
            //     < Redirect to='/signIn' />
            //   </>
          // } */}
                </Route>
                <Route path='/search'>
                  <Search setSideMenuVisibility={setVisibility} />
                  <SideMenu visible={visibleSideMenu} setVisibility={setVisibility} />
                </Route>
                <Route path='/cart'>
                  <Cart setSideMenuVisibility={setVisibility} />
                  <SideMenu visible={visibleSideMenu} setVisibility={setVisibility} />
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
