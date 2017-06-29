import React from 'react';
import ReactDOM from 'react-dom';

import {TestimonialItem} from './testimonialItem';

export class Testimonials extends React.Component {
    render() {
		let testimonials = [
			{
				"author": "Rusty Brooke",
				"description": "I dealt with Tim on the implementation of my company's website while he was at The Graphic Cafe. Tim's sage advice and IT skills proved to be invaluable, especially to a cyber-illiterate like me."
			},
			{
				"author": "Matt O’Dea",
				"description": "Tim worked with the Graphic Cafe for over 4 years, in that time Tim lead the web development side to the business, his ability to problem solve was second to none as we often tested the boundaries of web and interactive development."
			},
			{
				"author": "Randy An",
				"description": "Tim is really brilliant developer and he has wide knowledge in the IT industry."
			}
		];

		let listItems = testimonials.map((testimonial, i) =>
			<div className="col-12 col-sm-6 col-lg-4" key={i}>
		 		<TestimonialItem data={testimonial} />
			</div>
		);

        return <section id="testimonials" className="layout-section bg--tertiary">
			<div className="container">
				<div className="row text--center">
					<div className="col-sm-10 offset-sm-1">
						{listItems}
					</div>
				</div>
			</div>
		</section>;
    }
}