import React from 'react';
import ReactDOM from 'react-dom';

import 'styles/base.scss';

import App from 'components/App';
import * as serviceWorker from 'serviceWorker';

import createStore from './store/createStore';

// Store Instantiation
const initialState = window.___INITIAL_STATE__;

export const store = createStore(initialState);

ReactDOM.render(<App store={store}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
