import React from 'react';
import { shallow } from 'enzyme';

import Parallax from '../Parallax';

describe("Parallax", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Parallax image="img.jpg" />);
  });
});
