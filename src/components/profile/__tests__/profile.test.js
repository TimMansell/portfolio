import React from 'react';
import { shallow } from 'enzyme';

import Profile from '../profile';

describe("Profile", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Profile />);
  });
});
