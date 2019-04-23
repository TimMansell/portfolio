import React from 'react';
import PropTypes from 'prop-types';

export const SkillsItem = ({stack}) => {
	return <div className="stack__item">
		<a href={stack.url} target="_blank"  rel="noopener noreferrer">
			<img 
				src={require(`./img/${stack.img}`)} 
				alt={stack.name} 
				className="stack__image img--responsive"
				width={stack.width}
				title={stack.name} 
			/>
		</a>
	</div>;
}

SkillsItem.propTypes = {
	stack: PropTypes.object.isRequired
};

export default SkillsItem;