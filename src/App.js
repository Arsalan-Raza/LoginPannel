// import logo from './logo.svg';
import Login from "./components/login";
import LandingPage from "./components/LandingPage";
// import Header from "./components/header";
import HeaderAdminPage from "./components/Header-AdminPage";
import SignUp from "./components/SignUp";
// import GoogleSigin from "./components/GoogleSigin";
import HeaderUserPage from "./components/Header-userPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/signUp">
              <SignUp />
            </Route>
            <Route path="/userPage">
              <HeaderUserPage />
            </Route>
            <Route path="/adminPage">
              <HeaderAdminPage />
            </Route>
          </Switch>
        </div>
      </div>
      {/* <Header /> */}

      {/* <HeaderUserPage /> */}
      {/* <Login /> */}
      {/* <HeaderAdminPage /> */}
      {/* <SignUp /> */}
      {/* <GoogleSigin /> */}
    </Router>
  );
}

export default App;
