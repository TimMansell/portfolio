import React from 'react';
// import anime from 'animejs/lib/anime.js';

import Hero from '../Hero';
import LearnMore from '../LearnMore';
import ScrollFade from '../ScrollFade';
import ShuffleContent from '../ShuffleContent';
import Tagline from '../Tagline';

import IntroHi from './IntroHi';
import IntroName from './IntroName';

import './Intro.scss';

export const Intro = () => {
	return <section id="intro" className="hero bg--primary">
	<Hero blurFrom={3} blurTo={10} />

	<div className="info">
		<ScrollFade fadeMultiplier={1.15}>
			<h4 className="info__text info__text--sub-title">Melbourne, Australia</h4>
			<IntroHi />
			<IntroName />
			
			<Tagline />
			
		</ScrollFade>
	</div>

	<LearnMore />

</section>;
}

export default Intro;