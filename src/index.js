import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import { store } from './store';
import './index.css';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Titillium Web:300,400,700', 'sans-serif']
    }
});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
