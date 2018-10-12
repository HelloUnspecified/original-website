import React, { PureComponent, Fragment } from 'react';

import { withRouteData } from 'react-static';
import convert from 'htmr';

export default withRouteData(telerik => (
    <div className="defaultLayout">{convert(telerik.contents)}</div>
));
