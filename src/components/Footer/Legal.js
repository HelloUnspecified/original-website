import React, { Fragment } from 'react';

import './legal.css';

const Legal = props => (
    <div className="legalNav">
        <ul>
            <li>
                <a href="/legal/termsofuse">Terms of Use</a>
            </li>
            <li>
                <a href="/legal/copyright">Copyright Policy</a>
            </li>
            <li>
                <a href="/legal/privacy">Privacy Policy</a>
            </li>
        </ul>
    </div>
);

export default Legal;
