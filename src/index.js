import React from 'react';
import ReactDOM from 'react-dom';

import 'styles/base.scss';

import App from 'components/App';
import * as serviceWorker from 'serviceWorker';
import { Provider } from 'react-redux';
import store from './store/createStore';

const initialState = window.___INITIAL_STATE__;

const _store = initialState ? initialState : store;


ReactDOM.render(<Provider store={_store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
