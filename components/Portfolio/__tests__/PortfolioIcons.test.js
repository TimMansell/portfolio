import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import PortfolioIcons from '../PortfolioIcons';

const props = {
  title: 'test title',
};

describe('PortfolioIcons', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<PortfolioIcons {...props} />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<PortfolioIcons {...props} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
