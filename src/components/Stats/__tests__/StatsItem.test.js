import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import StatsItem, { offsetStats } from '../StatsItem';

const defaultProps = {
  description: 'lines of code',
  offset: 0.5,
  icon: 'code',
  value: 5,
};

describe('StatsItem', () => {
  it('should render my component', () => {
    render(<StatsItem {...defaultProps} />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<StatsItem {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should correctly calculate offset', () => {
    const { offset, value } = defaultProps;
    const offsetValue = offsetStats(value, offset);

    expect(offsetValue).toEqual(3);
  });
});
