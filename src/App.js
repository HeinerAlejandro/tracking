import React, { Component, Suspense } from 'react';
import history from './history'
import './App.scss';
import LoginPage from './views/LoginPage'
import { message } from 'antd'
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { isLogged } from './Routes/AccountRouter'
import { setUserLog, setUser, setAuthenticated } from './actions/LoginRegisterAction'
import { store } from './store'
import UserInterfazView from './views/UserInterfacePage'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount = () => {
    if(this.props.authenticated || isLogged()){
    console.log("verificando si puede autenticar")
    let data = localStorage.getItem("data_user")
    console.log(data)
    let data_user_complete = setUserLog(data)

    data_user_complete.then(data_user_complete => {
      store.dispatch(setUser(data_user_complete))
      store.dispatch(setAuthenticated(true))
    }).catch(error => {
      message.error(error)
    })
  }
  }

  componentDidUpdate = () => {
    this.componentDidMount()
  }

  render() {
    const is_authenticated = store.getState().authentication.is_authenticated
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
