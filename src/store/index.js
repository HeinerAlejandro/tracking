import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import refreshTokenServer from './../Middelware/StatusTokenMiddelware.js'
import ManagerReducer from './../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(ManagerReducer, composeEnhancers(applyMiddleware(thunk)))