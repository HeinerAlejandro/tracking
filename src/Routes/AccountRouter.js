import { Route, Redirect } from 'react-router-dom'
import React from 'react'
import UserInterfazView from './../views/UserInterfacePage'
import history from './../history'

const isLogged = () => {
  const access_token = localStorage.getItem('access_token_converted')
  return (!!access_token)
}

const isIndexPath = () => (history.location.pathname === '/' ? true : false)

const confirmAccesToAccount = () => {
  
  if(isLogged())
    return true

  return false
}

const AccountRouter = (...rest) => (
  <Route 
    {...rest}
    render = { props => {
        return confirmAccesToAccount() 
        ? (<UserInterfazView { ...props }/>)
        : (<Redirect to = {{ pathname : '/' }}/>)
    }}
  />
)

export { AccountRouter }