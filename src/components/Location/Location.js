import React from 'react';

import useScrollFade from 'hooks/useScrollFade';

import styles from './Location.module.scss';

export const Location = () => {
  const scrollFadeStyle = useScrollFade(1.15);

  return (
    <div style={scrollFadeStyle} data-e2e="fading-content">
      <div className={styles.location}>Melbourne, Australia</div>
    </div>
  );
};

export default Location;
