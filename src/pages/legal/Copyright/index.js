import React, { PureComponent, Fragment } from 'react';

import { withRouteData } from 'react-static';
import convert from 'htmr';

export default withRouteData(copyright => (
    <div className="defaultLayout">{convert(copyright.contents)}</div>
));
