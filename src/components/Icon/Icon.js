import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Icon.module.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faChevronDown,
  faAngleUp,
  faTerminal,
  faTasks,
  faCode,
  faCodeBranch,
  faLaptopCode,
  faMugHot,
  faQuoteLeft,
  faQuoteRight,
  faCogs,
  faBug,
  faTools,
} from '@fortawesome/free-solid-svg-icons';

import {
  faHtml5,
  faCss3Alt,
  faJs,
  faLinkedin,
  faTwitter,
  faGithub,
  faAppStoreIos,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faChevronDown,
  faAngleUp,
  faTerminal,
  faTasks,
  faCode,
  faCodeBranch,
  faLaptopCode,
  faMugHot,
  faQuoteLeft,
  faQuoteRight,
  faCogs,
  faBug,
  faTools,
  faHtml5,
  faCss3Alt,
  faJs,
  faLinkedin,
  faTwitter,
  faGithub,
  faAppStoreIos
);

// Default Icon.
const Icon = ({ name, className, size, padded }) => {
  const classes = classnames(styles.icon, className, {
    [styles.iconXs]: size === 'xs',
    [styles.iconSm]: size === 'sm',
    [styles.iconMd]: size === 'md',
    [styles.iconPadded]: padded,
  });

  return <FontAwesomeIcon icon={name} className={classes} />;
};

Icon.propTypes = {
  name: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool,
};

export default Icon;

// Icons.
export const IconChevronDown = ({ className, size, padded }) => {
  return (
    <Icon
      name={faChevronDown}
      className={className}
      size={size}
      padded={padded}
    />
  );
};

IconChevronDown.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool,
};

export const IconAngleUp = ({ className, size, padded }) => {
  return (
    <Icon name={faAngleUp} className={className} size={size} padded={padded} />
  );
};

IconAngleUp.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool,
};

export const IconTerminal = ({ className, size, padded }) => {
  return (
    <Icon name={faTerminal} className={className} size={size} padded={padded} />
  );
};

IconTerminal.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool,
};

export const IconCode = ({ className, size, padded }) => {
  return (
    <Icon name={faCode} className={className} size={size} padded={padded} />
  );
};

IconCode.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool,
};

export const IconCodeBranch = ({ className, size, padded }) => {
  return (
    <Icon
      name={faCodeBranch}
      className={className}
      size={size}
      padded={padded}
    />
  );
};

IconCodeBranch.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool,
};

export const IconCodeLaptop = ({ className, size, padded }) => {
  return (
    <Icon
      name={faLaptopCode}
      className={className}
      size={size}
      padded={padded}
    />
  );
};

IconCodeLaptop.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool,
};

export const IconMugHot = ({ className, size, padded }) => {
  return (
    <Icon name={faMugHot} className={className} size={size} padded={padded} />
  );
};

IconMugHot.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool,
};

export const IconQuoteLeft = ({ className, size, padded }) => {
  return (
    <Icon
      name={faQuoteLeft}
      className={className}
      size={size}
      padded={padded}
    />
  );
};

IconQuoteLeft.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool,
};

export const IconQuoteRight = ({ className, size, padded }) => {
  return (
    <Icon
      name={faQuoteRight}
      className={className}
      size={size}
      padded={padded}
    />
  );
};

IconQuoteRight.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool,
};

export const IconCogs = ({ className, size, padded }) => {
  return (
    <Icon name={faCogs} className={className} size={size} padded={padded} />
  );
};

IconCogs.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool,
};

// Brand Icons.
export const IconCss3Alt = ({ className, size, padded }) => {
  return (
    <Icon name={faCss3Alt} className={className} size={size} padded={padded} />
  );
};

IconCss3Alt.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool,
};

export const IconJs = ({ className, size, padded }) => {
  return <Icon name={faJs} className={className} size={size} padded={padded} />;
};

IconJs.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool,
};

export const IconAppStoreIos = ({ className, size, padded }) => {
  return (
    <Icon
      name={faAppStoreIos}
      className={className}
      size={size}
      padded={padded}
    />
  );
};

IconAppStoreIos.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool,
};

export const IconLinkedin = ({ className, size, padded }) => {
  return (
    <Icon name={faLinkedin} className={className} size={size} padded={padded} />
  );
};

IconLinkedin.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool,
};

export const IconTwitter = ({ className, size, padded }) => {
  return (
    <Icon name={faTwitter} className={className} size={size} padded={padded} />
  );
};

IconTwitter.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool,
};

export const IconGithub = ({ className, size, padded }) => {
  return (
    <Icon name={faGithub} className={className} size={size} padded={padded} />
  );
};

IconGithub.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool,
};
