import React, { PureComponent, Fragment } from 'react';

import { withRouteData } from 'react-static';
import convert from 'htmr';

export default withRouteData(privacy => (
    <div className="defaultLayout">{convert(privacy.contents)}</div>
));
