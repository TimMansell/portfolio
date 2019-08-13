import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import PortfolioItem from '../PortfolioItem';

const props = {
  thumb: './img/my-bupa.jpg',
  title: 'Title',
  description: 'Description',
  tech: 'Tech',
  url: 'url.com'
};

describe('PortfolioItem', () => {
  it('should render my component', () => {
    // eslint-disable-next-line
    const wrapper = shallow(<PortfolioItem {...props} />);
  });

  it('should match snapshot', () => {
    const snapshot = renderer.create(<PortfolioItem {...props} />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
