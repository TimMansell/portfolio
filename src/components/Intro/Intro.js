import React from 'react';

import Hero from 'components/Hero';
import LearnMore from 'components/LearnMore';
import Hi from 'components/Hi';
import Location from 'components/Location';
import Name from 'components/Name';
import Tagline from 'components/Tagline';

import styles from './Intro.module.scss';

export const Intro = () => {
  return (
    <section id="intro" className={styles.background} role="banner">
      <Hero />

      <div className={styles.intro}>
        <Hi />
        <Location />
        <Name />
        <Tagline />
      </div>

      <LearnMore />
    </section>
  );
};

export default Intro;
