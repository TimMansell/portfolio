import React from 'react';

import './SocialIcons.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faLinkedin, faTwitter, faGithub);

export const SocialIcons = () => {
    return <div className="social">
        <a className="social__icon" target="_blank" href="https://au.linkedin.com/in/timmansell" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </a>
        <a className="social__icon" target="_blank" href="https://twitter.com/TimMansell" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
        </a>
        <a className="social__icon" target="_blank" href="https://github.com/TimMansell" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
    </div>;
}

export default SocialIcons;