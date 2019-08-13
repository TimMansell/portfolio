import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import PortfolioIcons from '../PortfolioIcons';

describe('PortfolioIcons', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<PortfolioIcons />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<PortfolioIcons/>).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
