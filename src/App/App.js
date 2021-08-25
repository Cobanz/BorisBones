import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import LandingPage from '../LandingPage/LandingPage';
import ArcadePage from '../ArcadePage/ArcadePage';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>Hello, world!</header>

      <Router>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/arcade">
          <ArcadePage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
