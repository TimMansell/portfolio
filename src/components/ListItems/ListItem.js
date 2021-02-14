import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import Labels from '../Labels';

import styles from './ListItem.module.scss';

export const sortList = (list) =>
  list.sort((firstItem, secondItem) => secondItem.length - firstItem.length);

export const ListItem = ({ item }) => {
  const sortedList = sortList(item.list);

  return (
    <div className={styles.item}>
      <div className={styles.icon}>
        <Icon name={[item.icon.family, item.icon.name]} size="sm" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{item.title}</h3>
        <Labels items={sortedList} type="tertiary" size="lg" />
      </div>
    </div>
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ListItem;
