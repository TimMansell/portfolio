import React from 'react';
import ReactDOM from 'react-dom';

// import format from 'date-fns/format';

export class Presentations extends React.Component {
    render() {
        return <section id="presentations" className="layout-section bg--secondary">
			<div className="container">
				<div className="row text--center">
					<div className="col-12">
						<div className="heading text--tertiary">
							<h2 className="heading__title text--center" tm-shuffle-on-screen>Presentations</h2>
							<p className="heading__description">Some talks I have done</p>
						</div>
					</div>
				</div>
				<div className="row text--center">
					<div className="col-sm-10 offset-sm-1">
						<i className="lighter-note__icon fa fa-file-powerpoint-o text--secondary"></i>	
						<ul className="text--tertiary skills__list">
							<li><a href="presentations/web-components/" target="_blank">Web components</a></li>
							<li><a href="//docs.google.com/presentation/d/1ZE8mvgP5G_Th9zgRMEsbNZwAoKpsuWpacVbC1Y1C0GY" target="_blank">CSS with superpowers</a></li>
						</ul>
					</div>
				</div>
			</div>
		</section>;
    }
}