import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './SectionWrap.scss';

const SectionWrap = ({ container, background, id = '', children }) => {
  const sectionClasses = classnames('section-wrap', {
    'bg--primary': background === 'primary',
    'bg--secondary': background === 'secondary',
    'bg--tertiary': background === 'tertiary',
  });

  const containerClasses = classnames('container', {
    'container--medium': container === 'medium',
    'container--large': container === 'large',
  });

  return (
    <section id={id} className={sectionClasses}>
      <div className={containerClasses}>{children}</div>
    </section>
  );
};

SectionWrap.propTypes = {
  container: PropTypes.string,
  background: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.element,
};

export default SectionWrap;
