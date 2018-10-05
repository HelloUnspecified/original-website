import React, { Component } from 'react';
import Helment from 'react-helmet';
import { hot } from 'react-hot-loader';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Routes from 'react-static-routes';

import Header from './components/Header';
import Banner from './components/Banner';
import HomePage from './pages/Home';
import Footer from './components/Footer';

import './core.css';
import './app.css';

library.add(fas, far, fab);

class App extends Component {
    render() {
        return (
            <div>
                <Helment />
                <div className="app">
                    <Header />
                    <HomePage />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default hot(module)(App);
