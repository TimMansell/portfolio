import React from 'react';
import PropTypes from 'prop-types';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCss3Alt, faJs, faTrello } from '@fortawesome/free-brands-svg-icons';
import { faCode, faTerminal, faClipboardList, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCode, faCss3Alt, faJs, faTerminal, faClipboardList, faTrello, faGamepad);

export const ListItem = ({item}) => {
	return <div className="divider">
		<FontAwesomeIcon icon={[item.icon.family ,item.icon.name]} className="icon icon--secondary" />
		<ul className="skills__list">
			{item.list.map((item, i) =>
				<li className="skills__item" key={i}>{item}</li>
			)}
		</ul>
	</div>;
}

ListItem.propTypes = {
	item: PropTypes.object.isRequired
};

export default ListItem;