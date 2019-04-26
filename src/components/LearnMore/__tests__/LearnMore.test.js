import React from 'react';
import { shallow } from 'enzyme';

import LearnMore from '../LearnMore';

describe("LearnMore", () => {
  it("should render my component", () => {
    const wrapper = shallow(<LearnMore />);
  });
});
