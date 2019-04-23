import React from 'react';

import Header from '../Header';
import StackItem from './StackItem';

import stack from './json/stack.json';

export const CurrentStack = () => {
	return <>
		<Header title="Current Stack" text="I spend most of my time with these technologies / tools / methodologies" primary />

		<div className="stack">
			{stack.map((stack, i) =>
				<StackItem stack={stack} key={i} />
			)}
		</div>
	</>;
}

export default CurrentStack;