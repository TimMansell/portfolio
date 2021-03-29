import React from 'react';

import SectionWrap from 'layout/SectionWrap';

import Profile from 'components/Profile';
import Skills from 'components/Skills';
import RetiredSkills from 'components/RetiredSkills';
import CurrentStack from 'components/CurrentStack';
import Portfolio from 'components/Portfolio';
import Stats from 'components/Stats';
import Testimonials from 'components/Testimonials';
import Footer from 'components/Footer';

import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <SectionWrap id="profile" type="tertiary">
        <Profile />
      </SectionWrap>

      <SectionWrap id="skills" type="primary" container="medium">
        <Skills />
      </SectionWrap>

      <SectionWrap id="retired-skills" type="secondary" container="medium">
        <RetiredSkills />
      </SectionWrap>

      <SectionWrap id="stack" type="tertiary" container="medium">
        <CurrentStack />
      </SectionWrap>

      <SectionWrap id="portfolio" type="secondary" container="medium">
        <Portfolio />
      </SectionWrap>

      <SectionWrap id="stats" type="primary">
        <Stats />
      </SectionWrap>

      <SectionWrap id="testimonials" type="tertiary">
        <Testimonials />
      </SectionWrap>

      <Footer />
    </main>
  );
};

export default Main;
