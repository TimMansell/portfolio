import React from "react";

import SectionWrap from "../SectionWrap";
import Profile from "../Profile";
import Skills from "../Skills";
import RetiredSkills from "../RetiredSkills";
import CurrentStack from "../CurrentStack";
import Portfolio from "../Portfolio";
import Stats from "../Stats";
import Testimonials from "../Testimonials";
import Footer from "../Footer";

import styles from "./Main.module.scss";

const Main = () => {
  return (
    <main className={styles.main}>
      <SectionWrap id="profile" type="tertiary">
        <Profile />
      </SectionWrap>

      <SectionWrap id="skills" type="primary" container="medium">
        <Skills />
      </SectionWrap>

      <SectionWrap id="older-skills" type="secondary" container="medium">
        <RetiredSkills />
      </SectionWrap>

      <SectionWrap id="stack" type="tertiary" container="small">
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
