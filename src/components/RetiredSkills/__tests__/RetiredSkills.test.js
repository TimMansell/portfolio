import React from 'react';
import { shallow } from 'enzyme';

import RetiredSkills from '../RetiredSkills';

describe("Retired Skills", () => {
  it("should render my component", () => {
    const wrapper = shallow(<RetiredSkills />);
  });
});
