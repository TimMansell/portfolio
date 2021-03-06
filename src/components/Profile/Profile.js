import React from 'react';
import { Link } from 'react-scroll';

import SocialIcons from 'components/SocialIcons';
import Header from 'components/Header';
import Image from '../Image';

import styles from './Profile.module.scss';

export const Profile = () => {
  return (
    <>
      <Header
        title="Profile"
        text="I am an experienced and ambitious Front-end Engineer with over 8 years
          commercial experience in a digital agency environment. The last four
          years I have worked client-side. "
        type="primary"
      />

      <div className={styles.image}>
        <Image
          src={`Profile/img/undraw_feeling_proud_qne1.svg`}
          alt="alt"
          width="350"
          isPadded
        />
      </div>

      <div className={styles.profile}>
        <p>
          I specialise in HTML5, CSS3, SCSS, JS (ES6+), React, VueJS, NodeJS,
          NPM/Yarn, and Webpack.
        </p>

        <p>
          I develop with best practices in mind and adhere to W3C standards.
          Unfortunately not all browsers are created equal, so I utilise
          Progressive Enhancement (where possible), and use CSS/JS transpilers
          (PostCSS &amp; Babel), to ensure my code works across all popluar
          evergreen browsers.
        </p>

        <p>
          I believe that having a functional website is only part of the
          solution. Being found is just as important. Accessibility (a11y) and
          Search Engine Optimisation (SEO) is an integral part of my development
          process.
        </p>

        <p>
          Please view my{' '}
          <Link className={styles.link} to="portfolio" smooth={true}>
            portfolio
          </Link>{' '}
          to see some examples of my work.
        </p>
      </div>

      <SocialIcons />
    </>
  );
};

export default Profile;
