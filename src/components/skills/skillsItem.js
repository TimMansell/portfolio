import React from 'react';

import classnames from 'classnames';

export default class SkillsItem extends React.Component {
    render() {
		let iconClass = classnames('fa skills__icon', this.props.skill.icon);

        return (
			<div>
				<i className={iconClass}></i>
				<ul className="skills__list">
					{this.props.skill.list.map((item, i) =>
						<li key={i}>{item}</li>
					)}
				</ul>
			</div>
		);
    }
}