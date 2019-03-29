import React, { Component, Suspense } from 'react'
import { withRouter } from 'react-router'
import { Redirect, Switch, Route } from 'react-router-dom'
import { Container } from 'reactstrap'
import { Icon } from 'antd'
import {
  CLIENT_ID_DJANGO,
  CLIENT_SECRET_DJANGO
} from '../../constants/withTokens'

import { URL_LOGOUT } from '../../constants/withPanel'
import {store} from './../../store'
import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
} from '@coreui/react'
// sidebar nav config
// routes config
import routes from '../../Routes/PanelRouters'

import { isLogged } from '../../Routes/AccountRouter'


const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  constructor(props){
    super(props)

    this.signOut = this.signOut.bind(this)
    this.redirectToSettigns = this.redirectToSettigns.bind(this)
    this.redirectToProfile = this.redirectToProfile.bind(this)
  }

  loading = () => <Icon type =  'loading'/>

  redirectToSettigns = () => {
    this.props.history.push('/account/settigns')
  }

  redirectToProfile = () => {
    this.props.history.push('/account/profile')
  }

  signOut(e) {
    e.preventDefault()
    
    const token = localStorage.getItem('token')
    const type = localStorage.getItem('type')

    localStorage.removeItem('token')
    localStorage.removeItem('backend')
    localStorage.removeItem('type')
    localStorage.removeItem('access_token_converted')
    localStorage.removeItem('data_user')
    localStorage.removeItem('access_token_expires_in')
    localStorage.removeItem('refresh_token_converted')

    if(type === 'Bearer'){
    
      localStorage.removeItem('backend')

      fetch(URL_LOGOUT,{
        body: {
          client_id : CLIENT_ID_DJANGO,
          client_secret: CLIENT_SECRET_DJANGO,
          token: token,
        }
      })
    }else{

    }
    
    store.dispatch(this.props.setNullUser({}))
    store.dispatch(this.props.setAuthenticated(false))
    
    this.props.removeAllDevice()
    this.props.history.push('/')
  }

  render() {

    var logged = isLogged()

    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader
             redirectSettigns = { this.redirectToSettigns }
             redirectProfile = { this.redirectToProfile }
             onLogout={e=>this.signOut(e)}
             data_user = { this.props.data_user }
            />
          </Suspense>
        </AppHeader>
        <div className="app-body">
        
          <main className="main">
            <AppBreadcrumb appRoutes={routes}/>
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}    
                        exact={route.exact}
                        name={route.name}
                        render = {props => (
                            isLogged()     
                              ? <route.component { ...props } />
                              : <Redirect to = '/' />
                          )
                        } 
                        
                      />
                    ) : (null);
                  })}
                  <Redirect from="/account" to="/account/dashboard" />
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>       
      </div>
    );
  }
}

export default withRouter(DefaultLayout)
