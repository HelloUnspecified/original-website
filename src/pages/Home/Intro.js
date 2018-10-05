import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './intro.css';

const Intro = props => (
    <header className="special">
        <img className="icon" src="/images/logos/logoBlack.png" />

        <h2>
            HI! We're Unspecified.
            <br />I decided to give it a really creative name.
        </h2>
        <p>
            Turns out <strong>Twenty</strong> was the best I could come up with.
            Anyway, lame name aside,
            <br />
            it's minimally designed, fully responsive, built on HTML5/CSS3, and,
            like all my stuff,
            <br />
            released for free under the{' '}
            <a href="http://html5up.net/license">
                Creative Commons Attribution 3.0
            </a>{' '}
            license. Have fun!
        </p>
    </header>
);

export default Intro;
