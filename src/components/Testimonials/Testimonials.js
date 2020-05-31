import React, { useState, useEffect } from 'react';

import TestimonialItem from './TestimonialItem';

import testimonialsJson from './json/testimonials.json';
import styles from './Testimonials.module.scss';

import { IconQuoteLeft, IconQuoteRight } from '../Icon';

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(testimonialsJson);
  const [testimonial, setTestimonial] = useState(testimonialsJson[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      const sortedTestimonials = [
        ...testimonials.slice(1),
        ...testimonials.slice(0, 1),
      ];

      setTestimonials(sortedTestimonials);
      setTestimonial(sortedTestimonials[0]);
    }, 5000);

    return () => clearInterval(timer);
  });

  return (
    <div className={styles.testimonials}>
      <IconQuoteLeft className={styles.quote} />
      <TestimonialItem {...testimonial} />
      <IconQuoteRight className={styles.quote} />
    </div>
  );
};

export default Testimonials;
