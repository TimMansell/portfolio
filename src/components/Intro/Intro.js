import React from 'react';

import Hero from '../Hero';
import LearnMore from '../LearnMore';
import ScrollFade from '../ScrollFade';
// import ShuffleContent from '../ShuffleContent';

import Hi from '../Hi';
import Location from '../Location';
import Name from '../Name';
import Tagline from '../Tagline';

import './Intro.scss';

export const Intro = () => {
	return <section id="intro" className="bg--primary">
		<Hero blurFrom={3} blurTo={10} />

		<div className="intro">
			<Hi />

			<ScrollFade fadeMultiplier={1.15}>
				<Location />
				
				<Name />
				
				<Tagline />
				
			</ScrollFade>
		</div>

		<LearnMore />

	</section>;
}

export default Intro;