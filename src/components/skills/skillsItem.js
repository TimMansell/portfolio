import React from 'react';
import PropTypes from 'prop-types';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCss3Alt, faJs, faTrello } from '@fortawesome/free-brands-svg-icons';
import { faCode, faTerminal, faClipboardList, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCode, faCss3Alt, faJs, faTerminal, faClipboardList, faTrello, faGamepad);

export const SkillsItem = ({skill}) => {
	return <div className="divider">
		<FontAwesomeIcon icon={[skill.icon.family ,skill.icon.name]} className="icon icon--secondary" />
		<ul className="skills__list">
			{skill.list.map((item, i) =>
				<li className="skills__item" key={i}>{item}</li>
			)}
		</ul>
	</div>;
}

SkillsItem.propTypes = {
	skill: PropTypes.object.isRequired
};

export default SkillsItem;