import React, { PureComponent, Fragment } from 'react';
import { withRouteData, Link } from 'react-static';
import convert from 'htmr';

export default withRouteData(pnf => (
    <div className="defaultLayout">
        <div>{convert(pnf.contents)}</div>

        <br />
        <Link to="/">Home</Link>
    </div>
));
