import React from 'react';

import useScrollFade from 'hooks/useScrollFade';

import Hero from 'components/Hero';
import LearnMore from 'components/LearnMore';
import Hi from 'components/Hi';
import Location from 'components/Location';
import Name from 'components/Name';
import Tagline from 'components/Tagline';

import styles from './Intro.module.scss';

export const Intro = () => {
  const scrollFadeStyle = useScrollFade(1.15);

  return (
    <section id="intro" className={styles.background} role="banner">
      <Hero blurFrom={3} blurTo={10} />

      <div className={styles.intro}>
        <Hi />

        <div style={scrollFadeStyle}>
          <Location />

          <Name />

          <Tagline />
        </div>
      </div>

      <LearnMore />
    </section>
  );
};

export default Intro;
