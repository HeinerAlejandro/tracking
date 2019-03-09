import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import refreshTokenServer from './../Middelware/StatusTokenMiddelware.js'
import { routerMiddleware } from 'react-router-redux'
import ManagerReducer from './../reducers'
import history from '../history'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rMiddelware = routerMiddleware(history)
export const store = createStore(ManagerReducer, composeEnhancers(applyMiddleware(thunk, refreshTokenServer, rMiddelware)))