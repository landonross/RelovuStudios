import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RequestForm from './pages/RequestForm/RequestForm';
import HomePage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/RequestForm" component={RequestForm} />

        {/* <Homepage /> */}
      </Switch>
        <Footer />
    </Router>
  );
}

export default App;
