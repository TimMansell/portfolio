import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

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
  const classes = classnames('icon', className, {
    'icon--xs': size === 'xs',
    'icon--sm': size === 'sm',
    'icon--md': size === 'md',
    'icon--padded': padded
  });

  return <FontAwesomeIcon icon={name} className={classes} />;
};

Icon.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool
};

export default Icon;

// Icons.
export const IconChevronDown = ({ className, size, padded }) => {
  return <Icon name={faChevronDown} className={className} size={size} padded={padded} />;
};

IconChevronDown.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool
};

export const IconAngleUp = ({ className, size, padded }) => {
  return <Icon name={faAngleUp} className={className} size={size} padded={padded} />;
};

IconAngleUp.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool
};

export const IconTerminal = ({ className, size, padded }) => {
  return <Icon name={faTerminal} className={className} size={size} padded={padded} />;
};

IconTerminal.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool
};

export const IconClipboardList = ({ className, size, padded }) => {
  return <Icon name={faClipboardList} className={className} size={size} padded={padded} />;
};

IconClipboardList.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool
};

export const IconGamepad = ({ className, size, padded }) => {
  return <Icon name={faGamepad} className={className} size={size} padded={padded} />;
};

IconGamepad.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool
};

export const IconDesktop = ({ className, size, padded }) => {
  return <Icon name={faDesktop} className={className} size={size} padded={padded} />;
};

IconDesktop.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool
};

export const IconChalkboardTeacher = ({ className, size, padded }) => {
  return <Icon name={faChalkboardTeacher} className={className} size={size} padded={padded} />;
};

IconChalkboardTeacher.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool
};

export const IconCode = ({ className, size, padded }) => {
  return <Icon name={faCode} className={className} size={size} padded={padded} />;
};

IconCode.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool
};

export const IconCodeBranch = ({ className, size, padded }) => {
  return <Icon name={faCodeBranch} className={className} size={size} padded={padded} />;
};

IconCodeBranch.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool
};

export const IconMugHot = ({ className, size, padded }) => {
  return <Icon name={faMugHot} className={className} size={size} padded={padded} />;
};

IconMugHot.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool
};

export const IconBicycle = ({ className, size, padded }) => {
  return <Icon name={faBicycle} className={className} size={size} padded={padded} />;
};

IconBicycle.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool
};

export const IconQuoteLeft = ({ className, size, padded }) => {
  return <Icon name={faQuoteLeft} className={className} size={size} padded={padded} />;
};

IconQuoteLeft.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool
};

export const IconQuoteRight = ({ className, size, padded }) => {
  return <Icon name={faQuoteRight} className={className} size={size} padded={padded} />;
};

IconQuoteRight.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool
};

// Brand Icons.
export const IconCss3Alt = ({ className, size, padded }) => {
  return <Icon name={faCss3Alt} className={className} size={size} padded={padded} />;
};

IconCss3Alt.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool
};

export const IconJs = ({ className, size, padded }) => {
  return <Icon name={faJs} className={className} size={size} padded={padded} />;
};

IconJs.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool
};

export const IconTrello = ({ className, size, padded }) => {
  return <Icon name={faTrello} className={className} size={size} padded={padded} />;
};

IconTrello.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool
};

export const IconLinkedin = ({ className, size, padded }) => {
  return <Icon name={faLinkedin} className={className} size={size} padded={padded} />;
};

IconLinkedin.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool
};

export const IconTwitter = ({ className, size, padded }) => {
  return <Icon name={faTwitter} className={className} size={size} padded={padded} />;
};

IconTwitter.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool
};

export const IconGithub = ({ className, size, padded }) => {
  return <Icon name={faGithub} className={className} size={size} padded={padded} />;
};

IconGithub.propTypes = {
  name: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.string,
  padded: PropTypes.bool
};

