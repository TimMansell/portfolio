import React from 'react';
import { shallow } from 'enzyme';

import Header from '../header';

describe("Header", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Header />);
  });
});
