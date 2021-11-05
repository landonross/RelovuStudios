import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RequestForm from './pages/RequestForm/RequestForm';
import HomePage from './pages/Homepage/Homepage';
// import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
import UserPage from './pages/UserPage/UserPage';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/UserPage/*" component={UserPage} />
        <Route exact path="/RequestForm" component={RequestForm} />
        <Route exact path="/" component={HomePage} />
      </Switch>
        {/* <Footer /> */}
    </Router>
  );
}

export default App;
