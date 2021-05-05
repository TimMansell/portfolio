import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from 'components/Icon';
import Labels from '../Labels';

import { useIsFlexGapSupported } from 'hooks/useFlexGap';

import styles from './ListItem.module.scss';

export const ListItem = ({ item }) => {
  const hasFlexGap = useIsFlexGapSupported();

  const labels = [
    {
      type: 'tertiary',
      items: item.list,
    },
  ];

  const itemClasses = classnames(styles.item, {
    [styles.flexGap]: hasFlexGap,
  });

  return (
    <div className={itemClasses}>
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
