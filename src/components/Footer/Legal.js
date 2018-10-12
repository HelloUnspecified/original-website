import React, { Fragment } from 'react';
import { Link } from 'react-static';

import './legal.css';

const Legal = props => (
    <div className="legalNav">
        <ul>
            <li>
                <Link to="/Legal/TermsOfUsage">Terms of Use</Link>
            </li>
            <li>
                <Link to="/Legal/Copyright">Copyright Policy</Link>
            </li>
            <li>
                <Link to="/Legal/Privacy">Privacy Policy</Link>
            </li>
        </ul>
    </div>
);

export default Legal;
