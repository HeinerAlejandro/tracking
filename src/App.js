import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './views/LoginPage'
import 'antd/dist/antd.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


class App extends Component {

  renderContainer = () => (<h1>UserView</h1>)

  render() {
    return (
      <Router>
        <Switch>
          <Route path = '/account'
                exact
                component = {this.renderContainer}
          />
          <Route path = '/'
                exact
                component = {LoginPage}       
          />   
        </Switch>
      </Router>
    )
  }
}

export default App
