import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './products.css';

const Products = props => (
    <section className="productCallout">
        <article>
            <header>
                <h2>
                    Behold the <strong>icons</strong> that visualize what you’re
                    all about. or just take up space. your call bro.
                </h2>
            </header>
            <p>
                Sed tristique purus vitae volutpat ultrices. Aliquam eu elit
                eget arcu comteger ut fermentum lorem. Lorem ipsum dolor sit
                amet. Sed tristique purus vitae volutpat ultrices. eu elit eget
                commodo. Sed tristique purus vitae volutpat ultrices. Aliquam eu
                elit eget arcu commodo.
            </p>
            <footer>
                <ul className="buttons">
                    <li>
                        <a href="#" className="button">
                            Find Out More
                        </a>
                    </li>
                </ul>
            </footer>
        </article>

        <article>
            <ul className="featured-icons">
                <li>
                    <FontAwesomeIcon
                        icon={['far', 'clock']}
                        size="xs"
                        className="icon"
                    />{' '}
                    <span className="label">Feature 1</span>
                </li>
                <li>
                    <span className="icon fa-volume-up">
                        <span className="label">Feature 2</span>
                    </span>
                </li>
                <li>
                    <span className="icon fa-laptop">
                        <span className="label">Feature 3</span>
                    </span>
                </li>
                <li>
                    <span className="icon fa-inbox">
                        <span className="label">Feature 4</span>
                    </span>
                </li>
                <li>
                    <span className="icon fa-lock">
                        <span className="label">Feature 5</span>
                    </span>
                </li>
                <li>
                    <span className="icon fa-cog">
                        <span className="label">Feature 6</span>
                    </span>
                </li>
            </ul>
        </article>
    </section>
);

export default Products;
