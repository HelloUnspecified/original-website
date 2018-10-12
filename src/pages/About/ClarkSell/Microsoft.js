import React, { PureComponent, Fragment } from 'react';

import { withRouteData } from 'react-static';
import convert from 'htmr';

export default withRouteData(msft => (
    <div className="defaultLayout">
        <h1>{msft.title}</h1>
        <h4>{msft.subTitle}</h4>
        <br />

        <div className="defaultLayout">{convert(msft.contents)}</div>
    </div>
));
