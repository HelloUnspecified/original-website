import React, { PureComponent } from 'react';

import { Router, Link } from 'react-static';

import './header.css';

class Header extends PureComponent {
    render() {
        return (
            <header className="headerLayout">
                <section className="logo">
                    <h1>Unspecified</h1>
                </section>
                <Router>
                    <nav className="headerNav">
                        <ul>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>

                            <li>
                                <Link to="/speaking">Speaking</Link>
                            </li>

                            <li>
                                <Link to="/about">About</Link>
                            </li>

                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </nav>
                </Router>
            </header>
        );
    }
}

export default Header;
