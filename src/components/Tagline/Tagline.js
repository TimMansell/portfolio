import React from 'react';

import useScrollFade from 'hooks/useScrollFade';

import styles from './Tagline.module.scss';

export const Tagline = () => {
  const scrollFadeStyle = useScrollFade(1.15);

  return (
    <div style={scrollFadeStyle} data-e2e="fading-content">
      <div className={styles.tagline}>
        <div>Front-end Engineer</div>
        {/* <div className={styles.item}>Javascript Engineer</div>
      <div className={styles.item}>React Engineer</div>
      <div className={styles.item}>VueJS Engineer</div> */}
      </div>
    </div>
  );
};

export default Tagline;
