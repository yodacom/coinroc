import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { hashHistory, IndexRoute } from "react-router";
// import { isLoggedIn, logout } from './components/auth';
// import LoginForm from './components/LoginForm';
import Tickers from './components/Tickers';
// import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

const App = () => (
  // constructor(props) {
  //   super(props);
  //   // this.state = { loggedIn: isLoggedIn() };
  // }

  // handleLogin() {
  //   this.setState({ loggedIn: true });
  //   this.router.history.push('/');
  // }

  // handleLogout() {
  //   logout();
  //   this.setState({ loggedIn: false });
  //   this.router.history.push('/');
  // };

  <Router>
    <div>
      <NavBar />
      <Header />
      <section className="AppGen">
        <Tickers />
        <Switch>
          <Route exact path="/" component={Tickers} />
          <Route path="/portfolio/:portfolioId" />
          <Route exact path="/login" component={"LoginForm"} />
        </Switch>
      </section>
    </div>
  </Router>
);

export default App;
