import React from 'react';

import {Header} from '../header/header';

import StackItem from './stackItem';

import stack from './stack.json';

export class CurrentStack extends React.Component {
    render() {
        return <section id="stack" className="layout-section bg--tertiary text--center">
			<div className="container container-medium">

				<Header title="Current Stack" text="I spend most of my time with these technologies / tools / methodologies" primary />

				<div className="stack">
					{stack.map((stack, i) =>
						<StackItem stack={stack} key={i} />
					)}
				</div>
			</div>
		</section>;
    }
}