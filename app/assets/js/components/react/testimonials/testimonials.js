import React from 'react';
import ReactDOM from 'react-dom';

// import format from 'date-fns/format';

export class Testimonials extends React.Component {
    render() {
        return <section id="testimonials" className="layout-section bg--tertiary">
			<div className="container">
				<div className="row text--center">
					<div className="col-sm-10 offset-sm-1">
						<tm-testimonials></tm-testimonials>
					</div>
				</div>
			</div>
		</section>;
    }
}