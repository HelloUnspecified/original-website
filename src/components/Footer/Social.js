import React, { Fragment } from 'react';

import { Link } from 'react-static';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './social.css';

const Social = props => (
    <div className="socialNav">
        <ul>
            <li>
                <Link to="https://github.com/hellounspecified">
                    <FontAwesomeIcon
                        icon={['fab', 'github']}
                        aria-hidden="true"
                    />
                </Link>
            </li>

            <li>
                <Link to="https://github.com/hellounspecified">
                    <FontAwesomeIcon
                        icon={['fab', 'twitter']}
                        aria-hidden="true"
                    />
                </Link>
            </li>

            <li>
                <Link to="https://github.com/hellounspecified">
                    <FontAwesomeIcon
                        icon={['fab', 'youtube']}
                        aria-hidden="true"
                    />
                </Link>
            </li>

            <li>
                <Link to="https://github.com/hellounspecified">
                    <FontAwesomeIcon
                        icon={['fab', 'linkedin']}
                        aria-hidden="true"
                    />
                </Link>
            </li>

            <li>
                <Link to="https://github.com/hellounspecified">
                    <FontAwesomeIcon
                        icon={['fab', 'instagram']}
                        aria-hidden="true"
                    />
                </Link>
            </li>

            <li>
                <Link to="https://github.com/hellounspecified">
                    <FontAwesomeIcon
                        icon={['fab', 'snapchat']}
                        aria-hidden="true"
                    />
                </Link>
            </li>

            <li>
                <Link to="https://github.com/hellounspecified">
                    <FontAwesomeIcon
                        icon={['fab', 'medium']}
                        aria-hidden="true"
                    />
                </Link>
            </li>

            <li>
                <Link to="https://github.com/hellounspecified">
                    <FontAwesomeIcon
                        icon={['fa', 'envelope']}
                        aria-hidden="true"
                    />
                </Link>
            </li>
        </ul>
    </div>
);

export default Social;
