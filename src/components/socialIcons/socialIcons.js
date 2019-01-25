import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faLinkedin, faTwitter, faGithub);

export class SocialIcons extends React.Component {
    render() {
        return <div className="social text--center">
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
}