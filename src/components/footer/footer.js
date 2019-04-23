import React from 'react';

import SocialIcons from '../SocialIcons';
import Copyright from '../Copyright';

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