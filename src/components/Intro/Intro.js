import React from 'react';
// import anime from 'animejs/lib/anime.js';

import Hero from '../Hero';
import LearnMore from '../LearnMore';
import ScrollFade from '../ScrollFade';
import ShuffleContent from '../ShuffleContent';
import Tagline from '../Tagline';

import Hi from '../Hi';
import IntroName from './IntroName';

import './Intro.scss';

export const Intro = () => {
	return <section id="intro" className="hero bg--primary">
	<Hero blurFrom={3} blurTo={10} />

	<div className="info">
		<Hi />

		<ScrollFade fadeMultiplier={1.15}>
			<h4 className="info__text info__text--sub-title">Melbourne, Australia</h4>
			
			<IntroName />
			
			<Tagline />
			
		</ScrollFade>
	</div>

	<LearnMore />

</section>;
}

export default Intro;