import React from 'react';
// import ReactDOM from 'react-dom';

// import format from 'date-fns/format';
import {ShuffleCharacters} from '../shuffleCharacters/shuffleCharacters';

export class Skills extends React.Component {
    render() {
        return <section id="skills" className="layout-section bg--primary text--center">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="heading text--secondary">
							<ShuffleCharacters>
								<h2 className="heading__title text--center">Skills</h2>
							</ShuffleCharacters>
							<p className="heading__description">I spend most of my time with these technologies / tools / methodologies</p>
						</div>
					</div>
				</div>

				<div className="row skills">
					<div className="col-lg-6">
						<div className="row">
							<div className="col-12 col-sm-4 text--center text--secondary divider">
								<i className="fa fa-html5 skills__icon"></i>
								<ul className="skills__list">
									<li>Semantic HTML5</li>
									<li>Bootstrap</li>
									<li>SEO</li>
									<li>Accessibility</li>
									<li>PHP</li>
								</ul>
							</div>

							<div className="col-12 col-sm-4 text--center text--secondary divider">
								<i className="fa fa-css3 skills__icon"></i>
								<ul className="skills__list">
									<li>CSS3</li>
									<li>SCSS / LESS</li>
									<li>BEM / OOCSS</li>
									<li>PostCSS</li>
								</ul>
							</div>

							<div className="col-12 col-sm-4 text--center text--secondary divider">
								<i className="fa fa-mobile skills__icon"></i>
								<ul className="skills__list">
									<li>Responsive</li>
									<li>Mobile First</li>
									<li><a className="link" href="https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fwww.timmansell.com%2F&tab=mobile" target="_blank" rel="noopener noreferrer">Performance</a></li>
									<li>Optimisation</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="row">
							<div className="col-12 col-sm-4 text--center text--secondary divider">
								<i className="fa fa-code skills__icon"></i>
								<ul className="skills__list">
									<li>JavaScript ES5/ES6</li>
									<li>Babel</li>
									<li>AngularJS</li>
									<li>React</li>
									<li>Backbone.js</li>
									<li>JSON</li>
									<li>jQuery</li>
								</ul>
							</div>

							<div className="col-12 col-sm-4 text--center text--secondary divider">
								<i className="fa fa-terminal skills__icon"></i>
								<ul className="skills__list">
									<li>Node.js</li>
									<li>NPM / Yarn</li>
									<li>Gulp / Grunt</li>
									<li>Git / SVN</li>
									<li>Webpack</li>
								</ul>
							</div>

							<div className="col-12 col-sm-4 text--center text--secondary divider">
								<i className="fa fa-paper-plane skills__icon"></i>
								<ul className="skills__list">
									<li>Agile</li>
									<li>Scrum</li>
									<li>Kanban</li>
									<li>JIRA</li>
									<li>Table Tennis</li>
								</ul>
							</div>
						</div>
					</div>
				</div>					

				<p className="text-description text--secondary">I am currently playing around with</p>
				<i className="fa fa-gamepad skills__icon text--secondary"></i>
				<ul className="skills__list text--secondary">
					<li>Angular2</li>
					<li>Web Components</li>
					<li>Various PostCSS modules</li>
				</ul>
			</div>
		</section>;
    }
}