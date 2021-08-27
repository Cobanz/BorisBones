// import { useState } from 'react';
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import ArcadePage from '../ArcadePage/ArcadePage';

import './App.css';

const App = () => {
  // const [loggedIn, setLoggedIn] = useState("true")

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/arcade">
            <ArcadePage />
          </Route>
        </Switch>
      </Router>

      <div id="footer">
        <a href="https://github.com/Cobanz/hackathongame">GitHub Repo</a>
      </div>
    </div>
  );
};

export default App;
