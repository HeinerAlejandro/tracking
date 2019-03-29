import React, { Component } from 'react';
import './App.scss';
import LoginPage from './views/LoginPage'
import { message } from 'antd'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { isLogged } from './Routes/AccountRouter'
import { setUserLog, setUser, setAuthenticated } from './actions/LoginRegisterAction'
import { getLinkShopFromServer } from './actions/PanelActions'
import { store } from './store'
import UserInterfazView from './views/UserInterfacePage'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount = () => {
    if(this.props.authenticated || isLogged()){
   
      let data = localStorage.getItem("data_user")
      
      let data_user_complete = setUserLog(data)
      
      store.dispatch(getLinkShopFromServer())
      data_user_complete.then(data_user_complete => {
        store.dispatch(setUser(data_user_complete))
        store.dispatch(setAuthenticated(true))
      }).catch(error => {
        message.error("fallo al autenticar")
      })
    }
  }

  componentDidUpdate = () => {
    this.componentDidMount()
  }

  render() {
    
    return (
      <>
        <Router> 
            <Switch> 
              <Route 
                path = '/account'
                render = {
                  props => (
                    isLogged()
                      ? <UserInterfazView />
                      : <Redirect to = '/' />
                  )
                }        
              />
              <Route path = '/'
                exact
                render = {(props) => (
                  isLogged()
                    ? <Redirect to = '/account' />
                    : <LoginPage />
                )}       
              /> 
            </Switch>
        </Router>
      </>
    )
  }
}

export default connect(state => ({
  authenticated : state.authentication.is_authenticated
}) ,null)(App)
