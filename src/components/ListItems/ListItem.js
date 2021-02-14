import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import Labels from '../Labels';

import styles from './ListItem.module.scss';

export const ListItem = ({ item }) => {
  return (
    <div className={styles.item}>
      <div className={styles.icon}>
        <Icon name={[item.icon.family, item.icon.name]} size="sm" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{item.title}</h3>
        <Labels items={item.list} type="tertiary" size="lg" />
      </div>
    </div>
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ListItem;
