import React from 'react';


import {SocialIcons} from '../socialIcons/socialIcons';
import {Copyright} from '../date/date';

export class Footer extends React.Component {
    render() {
        return <footer id="contact" className="footer bg--secondary scrollto">
		<div className="footer-bar">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<SocialIcons />
						<Copyright />
					</div>
				</div>
			</div>
		</div>
	</footer>;
    }
}