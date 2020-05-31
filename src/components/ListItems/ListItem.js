import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import './ListItem.scss';

export const ListItem = ({ item }) => {
  const displayItem = ({ name, url }) => {
    if (url) {
      return (
        <a
          className="link link--alt"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      );
    }

    return name;
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