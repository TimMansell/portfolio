import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './SectionWrap.module.scss';

const SectionWrap = ({ container, type, id, children }) => {
  const sectionClasses = classnames(styles.section, {
    [styles.bgPrimary]: type === 'primary',
    [styles.bgSecondary]: type === 'secondary',
    [styles.bgTertiary]: type === 'tertiary',
  });

  const containerClasses = classnames(styles.container, {
    [styles.containerMedium]: container === 'medium',
    [styles.containerLarge]: container === 'large',
    [styles.containerSmall]: container === 'small',
  });

  return (
    <section id={id} className={sectionClasses}>
      <div className={containerClasses}>{children}</div>
    </section>
  );
};

SectionWrap.propTypes = {
  container: PropTypes.oneOf(['medium', 'large', 'small']),
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default SectionWrap;
