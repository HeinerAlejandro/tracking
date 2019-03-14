import { Route, Redirect } from 'react-router-dom'
import React from 'react'
import UserInterfazView from './../views/UserInterfacePage'
import { withRouter } from 'react-router'


const RouteDashboard = 'account/dashboard'

const isLogged = () => {
  let access_token = localStorage.getItem('token')
  return (!!access_token)
}

const privateRouter = ({ history }) => ( 
  <Route render = { (props) => (
    !isLogged()
    ? <Redirect to = ''/>
    : <UserInterfazView />
  )}
  />
)

const AccountRouter = withRouter(privateRouter)

export { 
  AccountRouter,
  isLogged,
  RouteDashboard
}