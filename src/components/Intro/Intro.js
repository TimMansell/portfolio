import React from 'react';
import { Link } from 'react-scroll';

import Hero from '../Hero';
import ScrollFade from '../ScrollFade';
import ShuffleContent from '../ShuffleContent';

import './Intro.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faChevronDown);

export const Intro = () => {
	return <section id="intro" className="hero bg--primary">
	<Hero blurFrom={3} blurTo={10} />

	<div className="info">
		<ScrollFade fadeMultiplier={1.15}>
			<h4 className="info__text info__text--sub-title">Melbourne, Australia</h4>
			<h1 className="info__title">Hi! I'm Tim Mansell</h1>
			
			<ShuffleContent>
				<h4 className="info__text info__text--blurb">Front-end Engineer</h4>
				<h4 className="info__text info__text--blurb">Javascript Engineer</h4>
				<h4 className="info__text info__text--blurb">React Engineer</h4>
				<h4 className="info__text info__text--blurb">VueJS Engineer</h4>
			</ShuffleContent>
			
		</ScrollFade>
	</div>

	<div className="learn-more">
		<Link className="learn-more__link" to="profile" smooth={true}>
			<FontAwesomeIcon className="learn-more__scroll" icon={faChevronDown} />
		</Link>
	</div>

</section>;
}

export default Intro;