import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';

import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import App from './App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import reduxPromise from 'redux-promise-middleware';
import logger from 'redux-logger';

import axios from 'axios';
window.axios = axios;

const store = createStore(
    reducers,
    {},
    applyMiddleware(logger, reduxThunk, reduxPromise()))

ReactDOM.render(
    //provider tag is a react component that brings together the react and redux sides of the application together. It informs all of its' child components (App) that a new state is available through Redux.
    <Provider store={store}><App/></Provider>,
    document.querySelector('#root')
);

registerServiceWorker();
