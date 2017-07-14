import React from 'react';


import format from 'date-fns/format';

export class Copyright extends React.Component {
    render() {
        return <p className="footer-bar__text text--center">&copy; {format(new Date(), 'YYYY')}<br/>Tim Mansell</p>;
    }
}