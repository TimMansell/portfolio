import React from 'react';


import Counter from '../randomNumbers/randomNumbers';

// import format from 'date-fns/format';

export class Stats extends React.Component {
    render() {
        return <section className="layout-section bg--primary text--secondary">
			<div className="container">
				<div className="row text--center lighter-note">
					<div className="col-xs-12 col-sm-3 divider">
						<i className="fa fa-code lighter-note__icon"></i>
						<p className="lighter-note__amount">
							<Counter begin={3000} end={50000} time={2000} />
						</p>
						<p className="lighter-note__text">lines of code</p>
					</div>
					<div className="col-xs-12 col-sm-3 divider">
						<i className="lighter-note__icon fa fa-code-fork"></i>
						<p className="lighter-note__amount">
							<Counter begin={300} end={1200} time={2000} />
						</p>
						<p className="lighter-note__text">git commits</p>
					</div>
					<div className="col-xs-12 col-sm-3 divider">
						<i className="lighter-note__icon fa fa-coffee"></i>	
						<p className="lighter-note__amount">
							<Counter begin={200} end={760} time={2000} />
						</p>
						<p className="lighter-note__text">coffees consumed</p>
					</div>
					<div className="col-xs-12 col-sm-3 divider">
						<i className="lighter-note__icon fa fa-bicycle"></i>
						<p className="lighter-note__amount">
							<Counter begin={650} end={3500} time={2000} />
						</p>
						<p className="lighter-note__text">kilometers cycled</p>
					</div>
				</div>
			</div>
		</section>;
    }
}