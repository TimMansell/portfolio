import React from 'react';
import { shallow } from 'enzyme';

import PortfolioIcons from '../PortfolioIcons';

describe("PortfolioIcons", () => {
  it("should render my component", () => {
    const wrapper = shallow(<PortfolioIcons />);
  });
});
