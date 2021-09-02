import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from '../LandingPage/LandingPage';
import ArcadePage from '../ArcadePage/ArcadePage';
import Footer from '../Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
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

      <Footer />
    </div>
  );
};

export default App;
