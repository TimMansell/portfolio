import React from 'react';
import { Link } from 'react-scroll';

import './LearnMore.scss';

import { IconChevronDown } from '../Icon';

export const ListItem = () => {
	return <div className="learn-more">
	<Link className="learn-more__link" to="profile" smooth={true}>
		<IconChevronDown size="sm" className="learn-more__scroll" />
	</Link>
</div>;
}

export default ListItem;