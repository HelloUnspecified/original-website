import React, { PureComponent, Fragment } from 'react';

import { withRouteData } from 'react-static';
import convert from 'htmr';

export default withRouteData(allstate => (
    <div className="defaultLayout">
        <h1>{allstate.title}</h1>
        <h4>{allstate.subTitle}</h4>
        <br />

        <div>{convert(allstate.contents)}</div>
    </div>
));
