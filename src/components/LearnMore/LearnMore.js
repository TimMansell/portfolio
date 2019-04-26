import React from 'react';
import { Link } from 'react-scroll';

import './LearnMore.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faChevronDown);

export const ListItem = () => {
	return <div className="learn-more">
	<Link className="learn-more__link" to="profile" smooth={true}>
		<FontAwesomeIcon className="learn-more__scroll" icon={faChevronDown} />
	</Link>
</div>;
}

export default ListItem;