import React from 'react';
import ReactDOM from 'react-dom';

// import format from 'date-fns/format';

export class Stats extends React.Component {
    render() {
        return <section className="layout-section bg--primary text--secondary">
			<div className="container">
				<div className="row text--center lighter-note">
					<div className="col-xs-12 col-sm-3 divider">
						<i className="fa fa-code lighter-note__icon"></i>
						<p className="lighter-note__amount">
							<tm-random-numbers-on-screen append-character="+" min-count="3000" max-count="50000">0</tm-random-numbers-on-screen>
						</p>
						<p className="lighter-note__text">lines of code</p>
					</div>
					<div className="col-xs-12 col-sm-3 divider">
						<i className="lighter-note__icon fa fa-code-fork"></i>
						<p className="lighter-note__amount">
							<tm-random-numbers-on-screen max-count="1200" append-character="+">0</tm-random-numbers-on-screen>
						</p>
						<p className="lighter-note__text">git commits</p>
					</div>
					<div className="col-xs-12 col-sm-3 divider">
						<i className="lighter-note__icon fa fa-coffee"></i>	
						<p className="lighter-note__amount">
							<tm-random-numbers-on-screen max-count="760" append-character="+">0</tm-random-numbers-on-screen>
						</p>
						<p className="lighter-note__text">coffees consumed</p>
					</div>
					<div className="col-xs-12 col-sm-3 divider">
						<i className="lighter-note__icon fa fa-bicycle"></i>
						<p className="lighter-note__amount">
							<tm-random-numbers-on-screen max-count="3500" append-character="+">0</tm-random-numbers-on-screen>
						</p>
						<p className="lighter-note__text">kilometers cycled</p>
					</div>
				</div>
			</div>
		</section>;
    }
}