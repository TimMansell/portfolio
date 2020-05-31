import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import styles from './ListItem.module.scss';

export const ListItem = ({ item }) => {
  const displayItem = ({ name, url }) => {
    if (url) {
      return (
        <a
          className={styles.link}
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
    <div className={styles.item}>
      <Icon name={[item.icon.family, item.icon.name]} size="md" padded />
      <ul className={styles.list}>
        {item.list.map((listItem, i) => (
          <li className={styles.listItem} key={i}>
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
