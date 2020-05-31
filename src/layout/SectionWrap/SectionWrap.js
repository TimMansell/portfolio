import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './SectionWrap.module.scss';

const SectionWrap = ({ container, background, id = '', children }) => {
  const sectionClasses = classnames(styles.section, {
    [styles.bgPrimary]: background === 'primary',
    [styles.bgSecondary]: background === 'secondary',
    [styles.bgTertiary]: background === 'tertiary',
  });

  const containerClasses = classnames(styles.container, {
    [styles.containerMedium]: container === 'medium',
    [styles.containerLarge]: container === 'large',
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
