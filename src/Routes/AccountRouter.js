import { Route, Redirect } from 'react-router-dom'
import React from 'react'

const confirmAccesToAccount = () => {
  
  const access_token = localStorage.getItem('access_token_converted')

  if(!access_token)
    return false

  return true
}

const AccountRouter = ({ component }, ...rest) => (
  <Route 
    {...rest}
    render = { props => (
        !confirmAccesToAccount() 
        ? (<component  { ...props }/>)
        : (<Redirect to = {{ pathname : '/' }}/>)
    )}
  />
)

export { AccountRouter }