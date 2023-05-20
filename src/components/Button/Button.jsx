import PropTypes from 'prop-types';

import styles from './Button.module.scss';

export const Button = ({ children, href, target, title }) => {
  return (
    <a
      className={styles.btn}
      href={href}
      target={target}
      title={title}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;
