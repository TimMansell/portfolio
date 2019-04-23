import React from 'react';
import { shallow } from 'enzyme';

import PortfolioItem from '../PortfolioItem';

const props = {
    thumb: 'my-bupa.jpg',
    title: '',
    description: '',
    tech: '',
    url: ''
  };

describe("PortfolioItem", () => {
  it("should render my component", () => {
    const wrapper = shallow(<PortfolioItem data={props} />);
  });
});
