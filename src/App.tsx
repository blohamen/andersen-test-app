import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BuyFlow, InsuranceIds } from './components/BuyFlow';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/buy/insurance_developer">
            <BuyFlow insuranceType={InsuranceIds.devIns} />
          </Route>
          <Route path="/buy/insurance_designer">
            <BuyFlow insuranceType={InsuranceIds.designIns} />
          </Route>
          <Route path="/">
            <p>Welcome to Getsafe's Insurance</p>
            <div>
              <Link to="/buy/insurance_developer">
                Get started with developer insurance!
              </Link>
            </div>
            <div>
              <Link to="/buy/insurance_designer">
                Get started with designer insurance!
              </Link>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
