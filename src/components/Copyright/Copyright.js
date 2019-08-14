import React from 'react';
import format from 'date-fns/format';

import './Copyright.scss';

export const Copyright = () => {
  return <p className="copyright">&copy; {format(new Date(), 'yyyy')}<br/>Tim Mansell</p>;
};

export default Copyright;
