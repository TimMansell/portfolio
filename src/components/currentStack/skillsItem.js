import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import { faVuejs, faNode, faNpm, faGit, faYarn, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faVuejs, faNode,  faNpm, faGit, faYarn, faReact, faCode);

export default class SkillsItem extends React.Component {
    render() {
        return (
			<div>
				<FontAwesomeIcon icon={[this.props.skill.icon.family ,this.props.skill.icon.name]} size="4x" />
				<p>{this.props.skill.name}</p>
			</div>
		);
    }
}