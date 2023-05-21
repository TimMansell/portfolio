import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Header.module.scss';

export const Header = ({ text, title, type }) => {
  const headerClasses = classnames(styles.heading, {
    [styles.headingPrimary]: type === 'primary',
    [styles.headingSecondary]: type === 'secondary',
    [styles.headingTertiary]: type === 'tertiary',
  });

  return (
    <div className={headerClasses}>
      <h2 className={styles.title} data-test="heading-title" aria-label={title}>
        {title}
      </h2>
      {text && (
        <p className={styles.description} data-test="heading-description">
          {text}
        </p>
      )}
    </div>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
};

export default Header;
