// import React from "react";

import useScrollFade from "hooks/useScrollFade";

import Hero from "../Hero";
import LearnMore from "components/LearnMore";
import Hi from "components/Hi";
import Location from "components/Location";
import Name from "components/Name";
import Tagline from "components/Tagline";

import styles from "./Intro.module.scss";

export const Intro = () => {
  const scrollFadeStyle = useScrollFade(1.15);

  return (
    <section id="intro" className={styles.background} role="banner">
      <Hero />

      <div className={styles.intro}>
        <Hi />

        <div style={scrollFadeStyle} data-e2e="fading-content">
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
