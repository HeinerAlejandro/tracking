import React, { Component } from 'react';
import history from './history'
import './App.scss';
import LoginPage from './views/LoginPage'
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AccountRouter } from './Routes/AccountRouter'
import { setAuthenticated } from './actions/LoginRegisterAction'
import { store } from './store'
import UserInterfazView from './views/UserInterfacePage'


if(localStorage.getItem('access_token_converted')){
  store.dispatch(setAuthenticated(true))
  //history.push('/account')
}

class App extends Component {

  render() {
  
    return (
      <Router>
        <Switch>
          <Route path = '/account'
                component = {UserInterfazView}       
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
