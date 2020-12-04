import React from 'react';
import PropTypes from 'prop-types';

import Image from '../Image';

import styles from './CurrentStack.module.scss';

export const SkillsItem = ({ url, img, name, width }) => {
  const srcs = [
    {
      type: 'svg+xml',
      src: require(`./img/${img}.svg`),
    },
  ];

  return (
    <div className={styles.item}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image srcs={srcs} name={name} width={width} />
      </a>
    </div>
  );
};

SkillsItem.propTypes = {
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default SkillsItem;
