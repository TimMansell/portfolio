import React from 'react';

import Header from '../Header';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faChalkboardTeacher);

export const Presentations = () => {
	return <>
		<Header title="Presentations" text="Some talks I have done" tertiary />

		<div className="skills skills--single">
			<FontAwesomeIcon icon={faChalkboardTeacher} className="icon" />
			<ul className="skills__list">
				<li className="skills__item"><a className="link link--alt" href="https://timmansell.github.io/presentations/web-components/index.html" target="_blank" rel="noopener noreferrer">Web components</a></li>
				<li className="skills__item"><a className="link link--alt" href="//docs.google.com/presentation/d/1ZE8mvgP5G_Th9zgRMEsbNZwAoKpsuWpacVbC1Y1C0GY" target="_blank" rel="noopener noreferrer">CSS with superpowers</a></li>
			</ul>
		</div>
	</>;
}

export default Presentations;