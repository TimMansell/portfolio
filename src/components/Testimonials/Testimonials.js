import React from 'react';
import Slider from 'react-slick';

import TestimonialItem from './TestimonialItem';
import { IconQuoteLeft, IconQuoteRight } from '../Icon';

import testimonials from './json/testimonials.json';
import styles from './Testimonials.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderSettings = {
  adaptiveHeight: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 7000,
  speed: 500,
};

export const Testimonials = () => {
  return (
    <div className={styles.testimonials} data-e2e="testimonials">
      <IconQuoteLeft className={styles.quote} />
      <Slider {...sliderSettings} className={styles.slider}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            data-e2e={`testimonial-slide-${index}`}
            data-testid="testimonial-slide"
          >
            <TestimonialItem {...testimonial} />
          </div>
        ))}
      </Slider>
      <IconQuoteRight className={styles.quote} />
    </div>
  );
};

export default Testimonials;
