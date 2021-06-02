import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from '../frontend/store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();

    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store} />, root);
})