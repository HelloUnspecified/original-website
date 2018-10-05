import React, { PureComponent } from 'react';

import Intro from './Intro';
import Products from './Products';

import './home.css';

class Home extends PureComponent {
    render() {
        return (
            <section className="homeLayout">
                <article className="intro">
                    <Intro />
                    <Products />
                </article>
            </section>
        );
    }
}

export default Home;
