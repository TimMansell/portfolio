import React from 'react';

import SectionWrap from 'layout/SectionWrap';
import SocialIcons from 'components/SocialIcons';
import Copyright from 'components/Copyright';

export const Footer = () => {
	return <SectionWrap id="contact" background="secondary">
		<footer>
			<SocialIcons />
			<Copyright />
		</footer>
	</SectionWrap>;
}

export default Footer;