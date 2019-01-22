import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCss3Alt, faJs, faTrello } from '@fortawesome/free-brands-svg-icons';
import { faCode, faTerminal, faClipboardList, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCode, faCss3Alt, faJs, faTerminal, faClipboardList, faTrello, faGamepad);


export default class SkillsItem extends React.Component {
    render() {
        return (
			<div>
				<FontAwesomeIcon icon={[this.props.skill.icon.family ,this.props.skill.icon.name]} size="4x" />
				<ul className="skills__list">
					{this.props.skill.list.map((item, i) =>
						<li className="skills__item" key={i}>{item}</li>
					)}
				</ul>
			</div>
		);
    }
}