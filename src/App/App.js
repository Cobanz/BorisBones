import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import LandingPage from '../LandingPage/LandingPage';
import ArcadePage from '../ArcadePage/ArcadePage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/arcade">
          <ArcadePage />
        </Route>
      </Router>

      <div id="footer">
        hi
        <a href="https://github.com/Cobanz/hackathongame">GitHub Repo</a>
      </div>
    </div>
  );
}

export default App;
