import React from 'react';

import TestimonialItem from './TestimonialItem';

import testimonials from './json/testimonials.json';
import './Testimonials.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faQuoteLeft, faQuoteRight);

export class Testimonials extends React.Component {
	constructor(props) {
		super(props);

		this.testimonials = testimonials;

        this.state = {
            testimonial: this.testimonials[0]
        };
	}

	componentDidMount() {
        this.tick = setInterval(this.rotateContent, 5000);
    }

    componentWillUnmount() {
        window.clearInterval(this.tick);
	}
	
    rotateContent = () => {
		this.testimonials.push(this.testimonials.shift());

        this.setState(prevState => ({
            testimonial: this.testimonials[0]
        })); 
    }

    render() {
        return <>
			<div className="testimonials text--center">
				<FontAwesomeIcon icon={faQuoteLeft} className="testimonials__quote" />
				<TestimonialItem data={this.state.testimonial} />
				<FontAwesomeIcon icon={faQuoteRight} className="testimonials__quote" />
			</div>
		</>;
    }
}

export default Testimonials;