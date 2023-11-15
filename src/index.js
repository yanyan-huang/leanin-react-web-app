/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import './bootstrap.min.css'
import App from './components/App';
import store from './components/App/store';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        {/* <React.StrictMode> */}
        <App />
        {/* </React.StrictMode> */}
    </Provider>
);

