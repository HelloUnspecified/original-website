import React, { Component } from 'react';
import Helment from 'react-helmet';
import { hot } from 'react-hot-loader';
import { Router } from 'react-static';
import Routes from 'react-static-routes';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Header from './components/Header';
import Footer from './components/Footer';

import './core.css';
import './app.css';
import './layouts.css';

library.add(fas, far, fab);

const App = () => (
    <Router>
        <div>
            <Helment />
            <div className="app">
                <div className="header">
                    <Header />
                </div>
                <div className="contentBody">
                    <Routes />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </div>
    </Router>
);

export default hot(module)(App);
