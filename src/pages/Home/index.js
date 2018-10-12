import React, { Fragment, PureComponent } from 'react';
import { Helmet } from 'react-helmet';

import Intro from './Intro';
import Products from './Products';

import './home.css';

class Home extends PureComponent {
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>Home @ Unspecified</title>
                    <meta name="description" content="Unspecified Software and Maker Company by Clark Sell and Carrie Sell" />
                </Helmet>

                <section className="homeLayout">
                    <article className="intro">
                        <Intro />
                        <Products />
                    </article>
                </section>
            </Fragment>
        );
    }
}

export default Home;
