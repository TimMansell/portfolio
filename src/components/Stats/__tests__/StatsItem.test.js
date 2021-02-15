import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import StatsItem, { offsetStats } from '../StatsItem';

const defaultProps = {
  description: 'lines of code',
  offset: 0.5,
  icon: 'code',
  value: 5,
};

describe('StatsItem', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<StatsItem {...defaultProps} />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<StatsItem {...defaultProps} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should correctly calculate offset', () => {
    const { offset, value } = defaultProps;
    const offsetValue = offsetStats(value, offset);

    expect(offsetValue).toEqual(3);
  });
});
