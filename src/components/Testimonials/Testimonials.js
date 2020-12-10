import React from 'react';
import Slider from 'react-slick';

import TestimonialItem from './TestimonialItem';

import testimonialsJson from './json/testimonials.json';
import styles from './Testimonials.module.scss';

import { IconQuoteLeft, IconQuoteRight } from '../Icon';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  adaptiveHeight: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 7000,
  speed: 500,
};

export const Testimonials = () => {
  return (
    <div id="test" className={styles.testimonials}>
      <IconQuoteLeft className={styles.quote} />
      <Slider {...settings} className={styles.slider}>
        {testimonialsJson.map((testimonial, index) => (
          <div key={index}>
            <TestimonialItem {...testimonial} />
          </div>
        ))}
      </Slider>
      <IconQuoteRight className={styles.quote} />
    </div>
  );
};

export default Testimonials;
