import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Copyright = props => (
    <div>
        <p>
            <FontAwesomeIcon icon={['far', 'copyright']} aria-hidden="true" />{' '}
            Unspecified
            <sup>
                <FontAwesomeIcon
                    icon="trademark"
                    size="xs"
                    aria-hidden="true"
                />
            </sup>{' '}
            LLC, Spring Grove, IL
        </p>
    </div>
);

export default Copyright;
