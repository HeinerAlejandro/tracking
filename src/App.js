import React, { Component } from 'react';

import './App.css';
import LoginPage from './views/LoginPage'
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AccountRouter } from './Routes/AccountRouter'
import { isAuthenticated } from './actions/LoginRegisterAction'
import { dispatch } from 'react-redux'

if(localStorage.getItem('access_token_converted'))
  dispatch(isAuthenticated(true))

class App extends Component {

  renderContainer = () => (<h1>UserView</h1>)

  render() {
    return (
      <Router>
        <Switch>

          <AccountRouter 
            exact
            path = '/account'
            component = {this.renderContainer()}
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
