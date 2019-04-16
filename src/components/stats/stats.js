import React from 'react';
import InViewport from '../inViewport/inViewport';

import Counter from '../counter/counter';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faCodeBranch, faMugHot, faBicycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCode, faCodeBranch, faMugHot, faBicycle);

export class Stats extends React.Component {
    render() {
        return <>
				<div className="lighter-note">
					<div className="lighter-note__item divider">
						<FontAwesomeIcon icon={faCode} className="icon" />
						<InViewport>
							<p className="lighter-note__amount">
								<Counter begin={3000} end={50000} time={2000} />
							</p>
						</InViewport>
						<p className="lighter-note__text">lines of code</p>
					</div>
					<div className="lighter-note__item divider">
						<FontAwesomeIcon icon={faCodeBranch} className="icon" />
						<InViewport>
							<p className="lighter-note__amount">
								<Counter begin={300} end={1200} time={2000} />
							</p>
						</InViewport>
						<p className="lighter-note__text">git commits</p>
					</div>
					<div className="lighter-note__item divider">
						<FontAwesomeIcon icon={faMugHot} className="icon" />
						<InViewport>
							<p className="lighter-note__amount">
								<Counter begin={200} end={760} time={2000} />
							</p>
						</InViewport>
						<p className="lighter-note__text">coffees consumed</p>
					</div>
					<div className="lighter-note__item divider">
						<FontAwesomeIcon icon={faBicycle} className="icon" />
						<InViewport>
							<p className="lighter-note__amount">
								<Counter begin={650} end={3500} time={2000} />
							</p>
						</InViewport>
						<p className="lighter-note__text">kilometers cycled</p>
					</div>
				</div>
			</>;
    }
}

export default Stats;