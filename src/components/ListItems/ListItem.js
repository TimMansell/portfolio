import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import Labels from '../Labels';

import styles from './ListItem.module.scss';

export const ListItem = ({ item }) => {
  const labels = [
    {
      type: 'tertiary',
      items: item.list,
    },
  ];

  return (
    <div className={styles.item} data-testid="list-item">
      <div className={styles.icon}>
        <Icon name={[item.icon.family, item.icon.name]} size="sm" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{item.title}</h3>
        <Labels labels={labels} type="tertiary" size="lg" centered />
      </div>
    </div>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
  }).isRequired,
};

export default ListItem;
