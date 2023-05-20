import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import styles from './ListItems.module.scss';

export const ListItems = ({ items }) => {
  return (
    <div className={styles.items}>
      {items.map((item, i) => (
        <ListItem item={item} key={i} />
      ))}
    </div>
  );
};

ListItems.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ListItems;
