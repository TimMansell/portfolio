import React from 'react';
import PropTypes from 'prop-types';
import styles from './Testimonials.module.scss';

export const TestimonialItem = ({ description, author }) => {
  return (
    <div className={styles.quote}>
      <p className={styles.text}>{description}</p>
      <p className={styles.name}>{author}</p>
    </div>
  );
};

TestimonialItem.propTypes = {
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default TestimonialItem;
