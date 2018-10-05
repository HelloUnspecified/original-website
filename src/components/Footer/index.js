import React, { PureComponent, Fragment } from 'react';

import Legal from './Legal';
import Social from './Social';
import Copyright from './Copyright';

import './footer.css';

class Footer extends PureComponent {
    render() {
        return (
            <section className="footerLayout">
                <footer className="footerWrapper">
                    <Social />
                    <Legal />
                    <Copyright />
                </footer>
            </section>
        );
    }
}

export default Footer;
