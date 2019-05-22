import React from 'react';
import { shallow } from 'enzyme';

import Tagline from '../Tagline';

describe("Tagline", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Tagline />);
  });
});
