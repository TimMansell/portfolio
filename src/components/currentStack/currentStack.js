import React from 'react';

import InViewport from '../inViewport/inViewport';
import {ShuffleCharacters} from '../shuffleCharacters/shuffleCharacters';

import StackItem from './stackItem';

import stack from './stack.json';

export class CurrentStack extends React.Component {
    render() {
        return <section id="stack" className="layout-section bg--tertiary text--center">
			<div className="container container-medium">

				<div className="heading">
					<InViewport>
						<ShuffleCharacters>
							<h2 className="heading__title text--center">Current Stack</h2>
						</ShuffleCharacters>
					</InViewport>
					<p className="heading__description">I spend most of my time with these technologies / tools / methodologies</p>
				</div>

				<div className="stack">
					{stack.map((stack, i) =>
						<StackItem stack={stack} key={i} />
					)}
				</div>
			</div>
		</section>;
    }
}