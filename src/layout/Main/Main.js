import React from 'react';

import SectionWrap from 'layout/SectionWrap';

import Profile from 'components/Profile';
import Skills from 'components/Skills';
import RetiredSkills from 'components/RetiredSkills';
import CurrentStack from 'components/CurrentStack';
import Portfolio from 'components/Portfolio';
import Stats from 'components/Stats';
import Presentations from 'components/Presentations';
import Testimonials from 'components/Testimonials';
import Footer from 'components/Footer';

import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <SectionWrap id="profile" background="tertiary">
        <Profile />
      </SectionWrap>

      <SectionWrap id="skills" background="primary">
        <Skills />
      </SectionWrap>

      <SectionWrap id="retired-skills" background="secondary">
        <RetiredSkills />
      </SectionWrap>

      <SectionWrap id="stack" background="tertiary" container="medium">
        <CurrentStack />
      </SectionWrap>

      <SectionWrap id="portfolio" background="secondary" container="medium">
        <Portfolio />
      </SectionWrap>

      <SectionWrap id="stats" background="primary">
        <Stats />
      </SectionWrap>

      <SectionWrap id="presentations" background="secondary">
        <Presentations />
      </SectionWrap>

      <SectionWrap id="testimonials" background="tertiary">
        <Testimonials />
      </SectionWrap>

      <Footer />
    </main>
  );
};

export default Main;
