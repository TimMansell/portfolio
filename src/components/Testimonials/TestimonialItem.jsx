import PropTypes from 'prop-types';
import styles from './TestimonialsItem.module.scss';

export const TestimonialItem = ({ description, author, company, position }) => {
  return (
    <>
      <p className={styles.text}>{description}</p>
      <p className={styles.name}>
        {author} ({position})
      </p>
      <p className={styles.company}>{company}</p>
    </>
  );
};

TestimonialItem.propTypes = {
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default TestimonialItem;
