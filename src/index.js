import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import store from './store';
import App from './cantainers/App/index';
import reset from './constants/css/reset';

// import css files
import './css/styles.css'
import './css/home-page.css'
import './css/task.css'
////////////////////////////////

const GlobalStyle = createGlobalStyle`${reset}`;

ReactDOM.render(
    <BrowserRouter>
        <Fragment>
            <Provider store={store}>
                <App />
            </Provider>
            <GlobalStyle />
        </Fragment>
    </BrowserRouter>,
    document.getElementById('root')
);
