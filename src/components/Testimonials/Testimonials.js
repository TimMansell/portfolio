import React from 'react';

import TestimonialItem from './TestimonialItem';

import testimonials from './json/testimonials.json';
import './Testimonials.scss';

import { IconQuoteLeft, IconQuoteRight } from '../Icon';

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
				<IconQuoteLeft className="testimonials__quote" />
				<TestimonialItem data={this.state.testimonial} />
				<IconQuoteRight className="testimonials__quote" />
			</div>
		</>;
    }
}

export default Testimonials;