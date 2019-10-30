import React from 'react';

import './SocialIcons.scss';

import { IconLinkedin, IconTwitter, IconGithub } from 'components/Icon';

export const SocialIcons = () => {
  return <div className="social">
    <a className="social__icon" target="_blank" href="https://au.linkedin.com/in/timmansell" rel="noopener noreferrer"aria-label="Visit my linked profile">
      <IconLinkedin size="xs" />
    </a>
    <a className="social__icon" target="_blank" href="https://twitter.com/TimMansell" rel="noopener noreferrer" aria-label="Visit my twitter page">
      <IconTwitter size="xs" />
    </a>
    <a className="social__icon" target="_blank" href="https://github.com/TimMansell" rel="noopener noreferrer" aria-label="Visit my github profile">
      <IconGithub size="xs" />
    </a>
  </div>;
};

export default SocialIcons;
