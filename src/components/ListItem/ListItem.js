import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

export const ListItem = ({item}) => {
	return <div className="divider">
		<Icon name={[item.icon.family, item.icon.name]} size="md" padded />
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