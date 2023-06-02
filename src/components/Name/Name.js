import React from 'react';

import useScrollFade from 'hooks/useScrollFade';

import styles from './Name.module.scss';

export const Name = () => {
  const scrollFadeStyle = useScrollFade(1.15);

  return (
    <div style={scrollFadeStyle} data-e2e="fading-content">
      <h1 className={styles.name}>I&apos;m Tim Mansell</h1>
    </div>
  );
};

export default Name;
