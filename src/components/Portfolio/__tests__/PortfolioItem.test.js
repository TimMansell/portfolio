import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import PortfolioItem from '../PortfolioItem';

describe("PortfolioItem", () => {
  it("should render my component", () => {
    const data = {
      thumb: './img/my-bupa.jpg',
      title: '',
      description: '',
      tech: '',
      url: ''
    };
    
    const wrapper = shallow(<PortfolioItem data={data} />);
  });

  it("should match snapshot", () => {
    const data = {
      thumb: './img/my-bupa.jpg',
      title: 'Title',
      description: 'Description',
      tech: 'Tech',
      url: 'url.com'
    };

    const snapshot = renderer.create(<PortfolioItem data={data} />).toJSON();
    
    expect(snapshot).toMatchSnapshot();
  });
});
