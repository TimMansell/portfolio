import React from 'react';
import format from 'date-fns/format';

export const Copyright = () => {
    return <p className="footer-bar__text">&copy; {format(new Date(), 'YYYY')}<br/>Tim Mansell</p>;
}

export default Copyright;