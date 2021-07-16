import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from '../frontend/store/store';
import { signup } from '../frontend/actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
          entities: {
            users: { [window.currentUser.id]: window.currentUser },
          },
          session: { currentUser: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signup = signup;

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
})