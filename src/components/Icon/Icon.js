import React from 'react';
import classnames from 'classnames';

import './Icon.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
    faChevronDown,
    faAngleUp,
    faTerminal,
    faClipboardList,
    faGamepad,
    faDesktop,
    faChalkboardTeacher,
    faCode,
    faCodeBranch,
    faMugHot,
    faBicycle,
    faQuoteLeft,
    faQuoteRight 
} from '@fortawesome/free-solid-svg-icons';

import { 
    faCss3Alt,
    faJs,
    faTrello,
    faLinkedin,
    faTwitter,
    faGithub 
} from '@fortawesome/free-brands-svg-icons';

library.add(
    faChevronDown,
    faAngleUp,
    faTerminal,
    faClipboardList,
    faGamepad,
    faDesktop,
    faChalkboardTeacher,
    faCode,
    faCodeBranch,
    faMugHot,
    faBicycle,
    faQuoteLeft,
    faQuoteRight,
    faCss3Alt,
    faJs,
    faTrello,
    faLinkedin,
    faTwitter,
    faGithub 
);

// Default Icon.
const Icon = ({ name, className, size, padded }) => {
    const classes = classnames('icon', className,  {
        'icon--xs': size === 'xs',
        'icon--sm': size === 'sm',
        'icon--md': size === 'md',
        'icon--padded': padded
    });

    return <FontAwesomeIcon icon={name} className={classes} />
}

export default Icon;

// Icons.
export const IconChevronDown = ({ className, size, padded }) => {
    return <Icon name={faChevronDown} className={className} size={size} padded={padded} />
}

export const IconAngleUp = ({ className, size, padded }) => {
    return <Icon name={faAngleUp} className={className} size={size} padded={padded} />
}

export const IconTerminal = ({ className, size, padded }) => {
    return <Icon name={faTerminal} className={className} size={size} padded={padded} />
}

export const IconClipboardList = ({ className, size, padded }) => {
    return <Icon name={faClipboardList} className={className} size={size} padded={padded} />
}

export const IconGamepad = ({ className, size, padded }) => {
    return <Icon name={faGamepad} className={className} size={size} padded={padded} />
}

export const IconDesktop = ({ className, size, padded }) => {
    return <Icon name={faDesktop} className={className} size={size} padded={padded} />
}

export const IconChalkboardTeacher = ({ className, size, padded }) => {
    return <Icon name={faChalkboardTeacher} className={className} size={size} padded={padded} />
}

export const IconCode = ({ className, size, padded }) => {
    return <Icon name={faCode} className={className} size={size} padded={padded} />
}

export const IconCodeBranch = ({ className, size, padded }) => {
    return <Icon name={faCodeBranch} className={className} size={size} padded={padded} />
}

export const IconMugHot = ({ className, size, padded }) => {
    return <Icon name={faMugHot} className={className} size={size} padded={padded} />
}

export const IconBicycle = ({ className, size, padded }) => {
    return <Icon name={faBicycle} className={className} size={size} padded={padded} />
}

export const IconQuoteLeft = ({ className, size, padded }) => {
    return <Icon name={faQuoteLeft} className={className} size={size} padded={padded} />
}

export const IconQuoteRight = ({ className, size, padded }) => {
    return <Icon name={faQuoteRight} className={className} size={size} padded={padded} />
}

// Brand Icons.
export const IconCss3Alt = ({ className, size, padded }) => {
    return <Icon name={faCss3Alt} className={className} size={size} padded={padded} />
}

export const IconJs = ({ className, size, padded }) => {
    return <Icon name={faJs} className={className} size={size} padded={padded} />
}

export const IconTrello = ({ className, size, padded }) => {
    return <Icon name={faTrello} className={className} size={size} padded={padded} />
}

export const IconLinkedin = ({ className, size, padded }) => {
    return <Icon name={faLinkedin} className={className} size={size} padded={padded} />
}

export const IconTwitter = ({ className, size, padded }) => {
    return <Icon name={faTwitter} className={className} size={size} padded={padded} />
}

export const IconGithub = ({ className, size, padded }) => {
    return <Icon name={faGithub} className={className} size={size} padded={padded} />
}