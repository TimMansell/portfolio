import React from 'react';

import InViewport from 'components/InViewport';
import Counter from 'components/Counter';

import './Stats.scss';

import { IconCode, IconCodeBranch, IconMugHot, IconBicycle } from 'components/Icon';

export const Stats = () => {
  return <>
		<div className="lighter-note">
		  <div className="lighter-note__item divider">
		    <IconCode padded />
		    <InViewport>
		      <p className="lighter-note__amount">
		        <Counter begin={3000} end={50000} time={2000} />
		      </p>
		    </InViewport>
		    <p className="lighter-note__text">lines of code</p>
		  </div>
		  <div className="lighter-note__item divider">
		    <IconCodeBranch padded />
		    <InViewport>
		      <p className="lighter-note__amount">
		        <Counter begin={300} end={1200} time={2000} />
		      </p>
		    </InViewport>
		    <p className="lighter-note__text">git commits</p>
		  </div>
		  <div className="lighter-note__item divider">
		    <IconMugHot padded />
		    <InViewport>
		      <p className="lighter-note__amount">
		        <Counter begin={200} end={760} time={2000} />
		      </p>
		    </InViewport>
		    <p className="lighter-note__text">coffees consumed</p>
		  </div>
		  <div className="lighter-note__item divider">
		    <IconBicycle padded />
		    <InViewport>
		      <p className="lighter-note__amount">
		        <Counter begin={650} end={3500} time={2000} />
		      </p>
		    </InViewport>
		    <p className="lighter-note__text">kilometers cycled</p>
		  </div>
		</div>
	</>;
};

export default Stats;
