import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Container, Wrapper } from "./components/Container";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import reducer, { initState } from "./components/reducer";
import { useEffect, useState } from "react";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Search from "./pages/Search";
import SideMenu from "./components/SideMenu";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { StateProvider } from "./components/StateProvider";
import { auth } from "./firebase";

function App() {
  const [visibleSideMenu, setVisibility] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log("The user is >>> ", user);
      if (user) {
      } else {
      }
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Wrapper margin="0 auto" maxWidth="1500px">
          <Container fluid padding="0">
            <StateProvider reducer={reducer} initState={initState}>
              <Switch>
                <Route exact path="/signUp">
                  <SignUp />
                </Route>
                <Route exact path="/signin">
                  <SignIn />
                </Route>
                <Route exact path="/">
                  <Home setSideMenuVisibility={setVisibility} />
                  <SideMenu
                    visible={visibleSideMenu}
                    setVisibility={setVisibility}
                  />
                </Route>
                <Route path="/search">
                  <Search setSideMenuVisibility={setVisibility} />
                  <SideMenu
                    visible={visibleSideMenu}
                    setVisibility={setVisibility}
                  />
                </Route>
                <Route path="/cart">
                  <Cart setSideMenuVisibility={setVisibility} />
                  <SideMenu
                    visible={visibleSideMenu}
                    setVisibility={setVisibility}
                  />
                </Route>
                <Route path="*">
                  <Redirect to="error404" />
                  <NotFoundPage />
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
