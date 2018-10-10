import React from 'react';

import { Link } from 'react-scroll';

// import format from 'date-fns/format';
import Hero from '../hero/hero';
import {ScrollFade} from '../scrollFade/scrollFade';
import {ShuffleContent} from '../shuffleContent/shuffleContent';

export class Intro extends React.Component {
    render() {
        return <section id="intro" className="hero bg--primary">
		<Hero blurFrom={3} blurTo={10} />

		<div className="info">
			<ScrollFade fadeMultiplier={1.15}>
				<h4 className="info__text info__sub-title">Melbourne, Australia</h4>
				<h1 className="info__title">Hi! I'm Tim Mansell</h1>
				<div className="info__blurb">
					<ShuffleContent>
						<h4 className="info__blurb-item info__text">Front-end ninja</h4>
						<h4 className="info__blurb-item info__text">React Developer</h4>
						<h4 className="info__blurb-item info__text">AngularJS Developer</h4>
						<h4 className="info__blurb-item info__text">Avid Snowboarder</h4>
						<h4 className="info__blurb-item info__text">Hard worker</h4>
					</ShuffleContent>
				</div>
			</ScrollFade>
		</div>

		<div className="learn-more d-none d-lg-block">
			<Link className="learn-more__link" to="profile" smooth={true}>
				<i className="learn-more__scroll fa fa-angle-down"></i>
			</Link>
		</div>

	</section>;
    }
}