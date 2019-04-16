import React from 'react';

import {Header} from '../header/header';

import StackItem from './stackItem';

import stack from './stack.json';

export class CurrentStack extends React.Component {
    render() {
        return <>
			<Header title="Current Stack" text="I spend most of my time with these technologies / tools / methodologies" primary />

			<div className="stack">
				{stack.map((stack, i) =>
					<StackItem stack={stack} key={i} />
				)}
			</div>
		</>;
    }
}

export default CurrentStack;