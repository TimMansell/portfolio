import React from 'react';
import PropTypes from 'prop-types';

export const TestimonialItem = ({description, author}) => {
  return <div className="testimonials__quote">
    <p className="testimonials__text">{description}</p>
    <p className="testimonials__name">{author}</p>
  </div>;
};

TestimonialItem.propTypes = {
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default TestimonialItem;
