import React from 'react';

import Hero from 'components/Hero';
import LearnMore from 'components/LearnMore';
import ScrollFade from 'components/ScrollFade';
import Hi from 'components/Hi';
import Location from 'components/Location';
import Name from 'components/Name';
import Tagline from 'components/Tagline';

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