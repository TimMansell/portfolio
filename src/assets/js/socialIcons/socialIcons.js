import React from 'react';


// import format from 'date-fns/format';

export class SocialIcons extends React.Component {
    render() {
        return <div className="social text--center">
	<a target="_blank" href="https://au.linkedin.com/in/timmansell" rel="noopener noreferrer"><i className="fa fa-linkedin social__icon"></i></a>
	<a target="_blank" href="https://twitter.com/TimMansell" rel="noopener noreferrer"><i className="fa fa-twitter social__icon"></i></a>
	<a target="_blank" href="https://github.com/TimMansell" rel="noopener noreferrer"><i className="fa fa-github social__icon"></i></a>
</div>;
    }
}