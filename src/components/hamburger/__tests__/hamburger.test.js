import React from 'react';
import { shallow } from 'enzyme';

import {Hamburger} from '../Hamburger'; // Import named so we don't use redux.

describe("Hamburger", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Hamburger />);
  });
});
