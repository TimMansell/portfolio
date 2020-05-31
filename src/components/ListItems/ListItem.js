import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import './ListItem.scss';

export const ListItem = ({ item }) => {
  const displayItem = (listItem) => {
    if (typeof listItem === 'object') {
      return (
        <a
          className="link link--alt"
          href={listItem.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {listItem.name}
        </a>
      );
    }

    return listItem;
  };

  return (
    <div className="list-item">
      <Icon name={[item.icon.family, item.icon.name]} size="md" padded />
      <ul className="list-item__list">
        {item.list.map((listItem, i) => (
          <li className="list-item__item" key={i}>
            {displayItem(listItem)}
          </li>
        ))}
      </ul>
    </div>
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ListItem;
