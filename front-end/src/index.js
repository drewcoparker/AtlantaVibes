import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

// Css
import '../public/stylesheets/styles.css';

// Redux, Router imports
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index.js';
import { Router, Route, hashHistory } from 'react-router'
// Instantiate the store obect with createStore method. The reducers param is
// required. I also pass the login token retreived from locals storage as
// persistedState. Finally, reduxPromise middleware is passed to assist in my
// ajax requests.
const store = createStore(
    reducers,
    // persistedState,
    applyMiddleware(
        reduxPromise
    )
)

store.subscribe(() => {
    console.log(store.getState().register);
})

ReactDOM.render(
    <Provider store={store} >
        <Router history={hashHistory}>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
