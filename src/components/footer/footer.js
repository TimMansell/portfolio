import React from 'react';

import {SocialIcons} from '../socialIcons/socialIcons';
import {Copyright} from '../date/date';

export const Footer = () => {
	return <footer id="contact" className="footer layout-section bg--secondary">
		<div className="footer-bar">
			<div className="container">
				<SocialIcons />
				<Copyright />
			</div>
		</div>
	</footer>;
}

export default Footer;