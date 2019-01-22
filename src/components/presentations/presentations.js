import React from 'react';

import InViewport from '../inViewport/inViewport';
import {ShuffleCharacters} from '../shuffleCharacters/shuffleCharacters';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faChalkboardTeacher);

export class Presentations extends React.Component {
    render() {
        return <section id="presentations" className="layout-section bg--secondary">
			<div className="container">
				<div className="row text--center">
					<div className="col-12">
						<div className="heading text--tertiary">
							<InViewport>
								<ShuffleCharacters>
								<h2 className="heading__title text--center">Presentations</h2>
								</ShuffleCharacters>
							</InViewport>
							<p className="heading__description">Some talks I have done</p>
						</div>
					</div>
				</div>
				<div className="row text--center">
					<div className="col-sm-10 offset-sm-1">
						<FontAwesomeIcon icon={faChalkboardTeacher} className="lighter-note__icon text--secondary" />
						<ul className="text--tertiary skills__list">
							<li className="skills__item"><a className="link link--alt" href="https://timmansell.github.io/presentations/web-components/index.html" target="_blank" rel="noopener noreferrer">Web components</a></li>
							<li className="skills__item"><a className="link link--alt" href="//docs.google.com/presentation/d/1ZE8mvgP5G_Th9zgRMEsbNZwAoKpsuWpacVbC1Y1C0GY" target="_blank" rel="noopener noreferrer">CSS with superpowers</a></li>
						</ul>
					</div>
				</div>
			</div>
		</section>;
    }
}