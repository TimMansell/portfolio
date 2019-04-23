import React from 'react';
import { shallow } from 'enzyme';

import SocialIcons from '../SocialIcons';

describe("SocialIcons", () => {
  it("should render my component", () => {
    const wrapper = shallow(<SocialIcons />);
  });
});
