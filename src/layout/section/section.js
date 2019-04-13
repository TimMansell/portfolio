import React from 'react';

import classnames from 'classnames';

class Section extends React.Component {
	render() {
		const classes = classnames('layout-section scrollto', {
			'bg--primary': this.props.primary,
			'bg--secondary': this.props.secondary,
			'bg--tertiary': this.props.tertiary
		});

		return <section id={this.props.id} className={classes}>
			<div className="container">
				{this.props.children}
			</div>
		</section>
	}
};

  
  export default Section;